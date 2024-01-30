type DownloadButtonProps = {
    upscaledSrc: string;
    originalFileName: string;
}

// Download file with unique file name
const handleDownload = ({upscaledSrc, originalFileName}: DownloadButtonProps) => {
    fetch(upscaledSrc)
    .then((response) => response.blob())
    .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", originalFileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
};

const DownloadButton = ({upscaledSrc, originalFileName}: DownloadButtonProps) => {
    return (
        <>
            {/* Downlaod image button */}
            <div className='flex justify-center mt-16'>
                <button
                    className='btn-hover-effect drop-shadow-md rounded-md p-0.5 hover:drop-shadow-none'
                    type="button"
                    onClick={() => handleDownload({ upscaledSrc, originalFileName })}
                >
                    <div className='flex rounded bg-dropZoneColorTo px-6 py-3'>
                        <img src='/download.svg' alt="Download icon" className='w-4 sm:w-5' />
                        <div className='pl-2 text-sm sm:text-base'>Download</div>
                    </div>
                </button>
            </div>
        </>
    );
}

export default DownloadButton;
