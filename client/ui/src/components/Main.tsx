import { useState } from "react";
import UploadButton from "./buttons/UploadButton"
import ImageComparison from "./ImageComparison";

const Main: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [upscaledSrc, setUpscaledSrc] = useState<string>("");
    const [originalSrc, setOriginalSrc] = useState<string>("");
    const [originalFileName, setOriginalFileName] = useState<string>("");
    const [dragIsActive, setDragIsActive] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const [resolutionError, setResolutionError] = useState<string>("");
    const [typeError, setTypeError] = useState<string>('');

    // Send image file to backend for upscaling
    function processImageFile(file: File) {

        // Reset error states
        setTypeError("")
        setResolutionError("")

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
            if (image.width > 1000 || image.height > 1000) {
                setIsLoading(false);
                setResolutionError('Image resolution exceeds the maximum allowed size of 1000 x 1000px');
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

                // Set fetched upscaled image, original source, and file name
                .then(data => {

                    const upscaledSrc = data["upscaled_path"];
                    setUpscaledSrc(upscaledSrc);
                    const getOriginalSrc = data["original_path"]
                    setOriginalSrc(getOriginalSrc)
                    const originalFileName = data["unique_name"]
                    setOriginalFileName(originalFileName)

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
                    } 'flex flex-col justify-center self-center rounded-lg w-600 h-400 m-10 p-6 shadow-customShadow`}

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
                                        <div className='text-center text-xs text-grayFont'>Larger images may take up to 3 minutes to complete</div>
                                    </>
                                ) : (
                                    <>

                                        {/* File type error message */}
                                        {typeError &&
                                            <p className='absolute bottom-14 left-[199px] text-yellow-500 text-xs'>{typeError}</p>
                                        }

                                        {/* Resolution error message */}
                                        {resolutionError &&
                                            <p className='absolute bottom-14 left-[69px] text-yellow-500 text-xs'>{resolutionError}</p>
                                        }

                                        {/* Upload button */}
                                        <UploadButton setFile={setFile} processImageFile={processImageFile} />

                                        <div className='text-center text-grayFont text-xs mt-5'>or drop image here</div>

                                        {/* File parameters */}
                                        <div className='flex text-grayFont text-xs mt-8 gap-2.5'>
                                            <div className='bg-fileTypeContainer rounded-md py-1 px-2'>png</div>
                                            <div className='bg-fileTypeContainer rounded-md py-1 px-2'>jpeg</div>
                                            <div className='bg-fileTypeContainer rounded-md py-1 px-2'>webp</div>
                                            <div className='bg-fileTypeContainer rounded-md py-1 px-2'>svg</div>
                                            <div className='self-center'>up to 1000 x 1000px</div>
                                        </div>

                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </form>
            )}

            {/* Image outputs */}
            <ImageComparison upscaledSrc={upscaledSrc} setUpscaledSrc={setUpscaledSrc} originalFileName={originalFileName} originalSrc={originalSrc} />

        </>
    );
}

export default Main;