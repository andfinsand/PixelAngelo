import { useState } from "react";
import UploadButton from "./buttons/UploadButton"
import ImageComparison from "./ImageComparison";

const DropZone: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [upscaledSrc, setUpscaledSrc] = useState<string>('');
    const [originalSrc, setOriginalSrc] = useState<string>('');
    const [originalFileName, setOriginalFileName] = useState<string>('');

    const [originalWidth, setOriginalWidth] = useState<number>(0);
    const [originalHeight, setOriginalHeight] = useState<number>(0);
    const [upscaledWidth, setUpscaledWidth] = useState<number>(0);
    const [upscaledHeight, setUpscaledHeight] = useState<number>(0);

    const [dragIsActive, setDragIsActive] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const [resolutionError, setResolutionError] = useState<string>('');
    const [typeError, setTypeError] = useState<string>('');
    const [limitError, setLimitError] = useState<string>('');

    // Rate limiter - 10 submissions every 24 hours
    const rateLimit = () => {

        // Retrieve upload data from local storage or initialize as an empty object
        const uploadData = JSON.parse(localStorage.getItem('uploadData') || '{}');
        const now = new Date();

        // Check for existing upload count or first upload time
        if (!uploadData.count || !uploadData.firstUpload) {
            localStorage.setItem('uploadData', JSON.stringify({ count: 1, firstUpload: now }));
            return true;
        }

        // Convert the first upload time from the stored data to a Date object
        const firstUpload = new Date(uploadData.firstUpload);
        const hoursPassed = (now.getTime() - firstUpload.getTime()) / 36e5; // Convert milliseconds to hours

        // Check if 24 hours have passed since first upload
        if (hoursPassed >= 24) {
            localStorage.setItem('uploadData', JSON.stringify({ count: 1, firstUpload: now }));
            return true;
        } else if (uploadData.count < 10) {
            localStorage.setItem('uploadData', JSON.stringify({ ...uploadData, count: uploadData.count + 1 }));
            return true;
        }

        return false;
    };

    // Send image file to backend for upscaling
    function processImageFile(file: File) {

        // Reset error states
        setTypeError('')
        setResolutionError('')
        setLimitError('')

        // Check rate limit
        if (!rateLimit()) {
            setLimitError('Upload limit reached. You can upload up to 10 images per day.');
            setIsLoading(false);
            return;
        }

        // File type checkpoint for drag event
        if (!file.type.startsWith('image/')) {
            setTypeError('File type is not supported');
            return;
        }

        // Show loader
        setIsLoading(true);

        // Create an image object as BLOB with selected file
        const image = new Image();
        image.src = URL.createObjectURL(file);

        // Async - Display image after fetch
        image.onload = function() {

            // Maximum resolution checkpoint - keep within function to avoid async issues
            if (image.width > 1500 || image.height > 1500) {
                setIsLoading(false);
                setResolutionError('Image resolution exceeds the maximum allowed size of 1500 x 1500px');
            } else {

                // Server API
                const formData = new FormData();
                formData.append('file', file);
                return fetch('http://localhost:5000/', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    // Fetch error
                    if (!response.ok) {
                        throw new Error('Failed to upload file');
                    }
                    return response.json();
                })

                // Set fetched upscaled image, original source, file name, and resolutions
                .then(data => {

                    // Images
                    const upscaledSrc = data["upscaled_path"];
                    setUpscaledSrc(upscaledSrc);
                    const getOriginalSrc = data["original_path"]
                    setOriginalSrc(getOriginalSrc)
                    const originalFileName = data["unique_name"]
                    setOriginalFileName(originalFileName)

                    // Resolutions
                    const originalWidth = data["original_width"]
                    setOriginalWidth(originalWidth)
                    const originalHeight = data["original_height"]
                    setOriginalHeight(originalHeight)
                    const upscaledWidth = data["upscaled_width"]
                    setUpscaledWidth(upscaledWidth)
                    const upscaledHeight = data["upscaled_height"]
                    setUpscaledHeight(upscaledHeight)

                    // Introduce a delay before setting loader to false to prevent screen flash
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 100);
                })

                // Error handling
                .catch(error => {

                    // Introduce a delay before setting loader to false to prevent screen flash
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 100);

                    console.error(error);
                });
            }
        }
    }

    // Drag and Drop files
    // Initial drag event when file enters the dropzone
    function handleDragEnter(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragIsActive(true);
    }

    // Maintain drag event
    function handleDragOver(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragIsActive(true);
    }

    // Stop drag event if no longer hovering
    function handleDragLeave(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragIsActive(false);
    }

    // Trigger API once file is dropped
    function handleDrop(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragIsActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processImageFile(e.dataTransfer.files[0]); // Trigger API
        }
    }

    return (
        <>
            {/* Dropzone */}
            {!upscaledSrc && (
                <form
                    className={`${
                        dragIsActive ? "bg-dropZoneColorFrom brightness-105" : "bg-gradient-to-br from-dropZoneColorFrom to-dropZoneColorTo"
                    } 'flex flex-col justify-center self-center rounded-lg shadow-customShadow w-[290px] h-[350px] m-0 p-4 sm:w-[440px] sm:h-[435px] sm:m-10 sm:p-6 md:w-[650px]`}

                    // Drag and drop handlers
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >

                    {/* Dotted border */}
                    <div className='relative flex justify-center border-2 border-dotted border-dottedColor rounded-md w-full h-full'>

                        {/* Content */}
                        <div className='flex self-center'>
                            <div className='flex flex-col'>

                                {/* Trigger loader on upload */}
                                {isLoading ? (
                                    <>
                                        <div className='flex self-center loader'></div>
                                        <div className='text-center text-sm text-grayFont mt-12 mb-2'>Upscaling...</div>
                                        <div className='text-center text-[10px] text-grayFont mx-7 sm:text-xs'>Larger images may take up to a minute to complete</div>
                                    </>
                                ) : (
                                    <>

                                        {/* File type error message */}
                                        {typeError &&
                                            <p className='absolute bottom-9 left-[65px] right-[65px] text-center text-yellow-500 text-[10px] sm:text-xs sm:bottom-14 md:left-[199px] md:right-[199px]'>{typeError}</p>
                                        }

                                        {/* Resolution error message */}
                                        {resolutionError &&
                                            <p className='absolute bottom-8 left-[27px] right-[27px] text-center text-yellow-500 text-[10px] sm:text-xs sm:bottom-14 md:left-[69px] md:right-[69px]'>{resolutionError}</p>
                                        }

                                        {/* Rate limit error message */}
                                        {limitError &&
                                            <p className='absolute bottom-8 left-[36px] right-[36px] text-center text-yellow-500 text-[10px] sm:text-xs sm:bottom-14 md:left-[113px] md:right-[113px]'>{limitError}</p>
                                        }

                                        {/* Upload button */}
                                        <UploadButton setFile={setFile} processImageFile={processImageFile} />

                                        <div className='text-center text-grayFont text-[10px] mt-3 sm:mt-5 sm:text-xs'>or drop image here</div>

                                        {/* File parameters */}
                                        <div className='flex flex-col text-grayFont text-[10px] mt-8 sm:flex-row sm:text-xs'>
                                            <div className='flex gap-2.5'>
                                                <div className='bg-fileTypeContainer rounded-md py-1 px-2'>png</div>
                                                <div className='bg-fileTypeContainer rounded-md py-1 px-2'>jpeg</div>
                                                <div className='bg-fileTypeContainer rounded-md py-1 px-2'>webp</div>
                                                <div className='bg-fileTypeContainer rounded-md py-1 px-2'>svg</div>
                                            </div>
                                            <div className='self-center mt-3 sm:mt-0 sm:ml-2.5'>
                                                <div>up to 1500 x 1500px</div>
                                            </div>
                                        </div>

                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            )}

            {/* Image outputs */}
            <ImageComparison
                upscaledSrc={upscaledSrc}
                setUpscaledSrc={setUpscaledSrc}
                originalFileName={originalFileName}
                originalSrc={originalSrc}
                originalWidth={originalWidth}
                originalHeight={originalHeight}
                upscaledWidth={upscaledWidth}
                upscaledHeight={upscaledHeight}
            />

        </>
    );
}

export default DropZone;
