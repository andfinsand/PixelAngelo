import torch
from PIL import Image
from RealESRGAN import RealESRGAN

# Avoid redundant model loading
models = {}

def upscale_image(input_image_path, output_image_path, scale_factor=2):

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
    image = Image.open(input_image_path).convert('RGB')

    # Use model and save to output path
    upscaled_image = model.predict(image)
    upscaled_image.save(output_image_path)
