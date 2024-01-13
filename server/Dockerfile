# Use the official Python image
FROM python:3.11.1-buster

# Set the working directory
WORKDIR /

# Install required packages
RUN pip install FLask b2sdk pillow requests git+https://github.com/sberbank-ai/Real-ESRGAN.git

# Add the model file to a "model" folder
ADD models/RealESRGAN_x2plus.pth /models/RealESRGAN_x2plus.pth

# Add the upscaling file
ADD upscaler.py .

# Start the container and run the file
CMD [ "python", "-u", "/upscaler.py" ]
