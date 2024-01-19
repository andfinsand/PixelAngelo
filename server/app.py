from flask import Flask, request
from flask_cors import CORS
from PIL import Image
from dotenv import load_dotenv

import os
import requests
import tempfile
import time
import uuid

from bucket_storage import upload_to_bucket

app = Flask(__name__)
CORS(app)

# Env variables
load_dotenv()
temp_storage = os.getenv('temp_storage')
runpod_url = os.getenv('runpod_url')
runpod_key = os.getenv('runpod_key')

@app.route('/', methods=['POST'])
def receive_image():

    # Receive image from client
    file = request.files['file']

    # Generate a unique file name
    unique_filename = str(uuid.uuid4()) + os.path.splitext(file.filename)[1]

    # Save original image to temporary file
    with tempfile.NamedTemporaryFile(delete=False) as temp:
        file.save(temp)
        temp_path = temp.name

    # Upload original image to Backblaze bucket
    original_image_backblaze_url = upload_to_bucket(temp_path, unique_filename)

    # Delete the temporary file
    os.remove(temp_path)

    # Runpod API
    url = f'{runpod_url}/run'
    headers = {
        'Authorization': f'Bearer {runpod_key}',
        'Content-Type': 'application/json'
    }
    job = {
        'input': {
            'model': 'upscaler',
            'image_url': original_image_backblaze_url,
            'filename': unique_filename
        }
    }

    response = requests.post(url, headers=headers, json=job)

    # Get job id and check status
    job_id = response.json()['id']
    status = 'IN_QUEUE'
    while status == 'IN_QUEUE' or status == 'IN_PROGRESS' or status == 'CANCELLED':
        # Job success
        if status == 'COMPLETED':
            break
        time.sleep(5)
        job_response = requests.get(f'{runpod_url}/status/{job_id}', headers=headers)
        status = job_response.json()['status']

    # Get width and height of original image
    original_resolution = Image.open(file)
    original_width, original_height = original_resolution.size

    # Calculate width and height of upscaled image by 2x
    upscaled_width = original_width * 2
    upscaled_height = original_height * 2

    return {'upscaled_path': f'https://f005.backblazeb2.com/file/pixelangelo-upscaler/upscaled_{unique_filename}', 'original_path': original_image_backblaze_url, 'unique_name': unique_filename, 'original_width': original_width, 'original_height': original_height, 'upscaled_width': upscaled_width, 'upscaled_height': upscaled_height}


if __name__ == '__main__':
    app.run(debug=True)
