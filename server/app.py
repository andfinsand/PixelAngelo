from flask import Flask, request
from flask_cors import CORS
from PIL import Image
from dotenv import load_dotenv
import os
import uuid

from upscaler import upscale_image

app = Flask(__name__)
CORS(app)

# Temporary location for image files
load_dotenv()
temp_storage = os.getenv('temp_storage')

@app.route('/', methods=['POST'])
def receive_image():

    # Receive image from client
    file = request.files['file']

    # Generate a unique file name
    unique_filename = str(uuid.uuid4()) + os.path.splitext(file.filename)[1]

    # Delete existing images in temporary location
    for filename in os.listdir(temp_storage):
        file_path = os.path.join(temp_storage, filename)
        if os.path.isfile(file_path):
            os.remove(file_path)

    # Store original image to temporary location
    input_image_path = os.path.join(temp_storage, unique_filename)

    # Save original image
    file.save(input_image_path)

    # Create location for upscaled image
    output_image_path = os.path.join(temp_storage, 'upscaled_' + unique_filename)

    # Upscaler
    upscale_image(input_image_path, output_image_path)

    # Get width and height of original and upscaled image for display
    original_resolution = Image.open(input_image_path)
    original_width, original_height = original_resolution.size
    upscaled_resolution = Image.open(output_image_path)
    upscaled_width, upscaled_height = upscaled_resolution.size

    # Return upscaled image
    filename_prefix = "static/images/"
    upscaled_path = filename_prefix + 'upscaled_' + unique_filename
    original_path = filename_prefix + unique_filename

    return {"upscaled_path": f"http://127.0.0.1:5000/{upscaled_path}", "original_path": f"http://127.0.0.1:5000/{original_path}", "unique_name": unique_filename, "original_width": original_width, "original_height": original_height, "upscaled_width": upscaled_width, "upscaled_height": upscaled_height}


if __name__ == '__main__':
    app.run(debug=True)
