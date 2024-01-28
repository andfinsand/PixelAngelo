from dotenv import load_dotenv
import b2sdk.v2 as b2
import os

# Get Backblaze bucket keys
load_dotenv()
b2_api_key_id = os.getenv('b2_api_key_id')
b2_api_key_application = os.getenv('b2_api_key_application')

def upload_to_bucket(temp_path, unique_filename):

    # Access Backblaze account
    info = b2.InMemoryAccountInfo()
    b2_api = b2.B2Api(info)
    b2_api.authorize_account("production", b2_api_key_id, b2_api_key_application)
    bucket = b2_api.get_bucket_by_name('pixelangelo-upscaler')

    # Upload file
    file_info = bucket.upload_local_file(local_file=temp_path, file_name=unique_filename)

    # Backblaze image url
    original_image_backblaze_url = f"https://f005.backblazeb2.com/file/pixelangelo-upscaler/{file_info.file_name}"

    return original_image_backblaze_url
