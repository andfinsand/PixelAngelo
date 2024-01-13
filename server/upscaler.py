from PIL import Image
from RealESRGAN import RealESRGAN
import b2sdk.v2 as b2
import os
import tempfile
import torch

# Avoid redundant model loading
models = {}

# Upscale function
def upscale_image(path_to_original, scale_factor=2):

    # Determine GPU vs CPU
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

    # Check if the model for the given scale factor is already loaded
    if scale_factor not in models:

        # If not, create a new model and load the weights
        model = RealESRGAN(device, scale=scale_factor)
        weights_path = f'models/RealESRGAN_x{scale_factor}plus.pth'
        model.load_weights(weights_path)

        # Store the model in the dictionary
        models[scale_factor] = model

    # Get the model from the dictionary
    model = models[scale_factor]

    # Convert to RGB
    image = Image.open(path_to_original).convert('RGB')

    # Use model
    upscaled_image = model.predict(image)

    return upscaled_image

# Runpod handler
def handler(job):

    # Get url to original image and get original file name
    path_to_original = job['input']['image_url']
    unique_filename = job['input']['filename']

    # Run upscaling model
    upscaled_image = upscale_image(path_to_original)

    # Save the image to a temporary file in the container's local file system
    with tempfile.NamedTemporaryFile(delete=False) as temp:
        upscaled_image.save(temp, format='JPEG')
        temp_path = temp.name

    # Upload upscaled image to Backblaze bucket
    info = b2.InMemoryAccountInfo()
    b2_api = b2.B2Api(info)

    # Authenticate with Backblaze B2
    b2_api.authorize_account('production', os.environ['BUCKET_ACCESS_KEY_ID'], os.environ['BUCKET_SECRET_ACCESS_KEY'])

    # Get bucket reference
    bucket = b2_api.get_bucket_by_name('pixelangelo-upscaler')

    # Upload the temporary file to the bucket
    bucket.upload_local_file(local_file=temp_path, file_name='upscaled_' + unique_filename)

    # Delete the temporary file
    os.remove(temp_path)
