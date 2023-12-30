import { useRef } from "react";

const UploadButton: React.FC = () => {
    const imageInputRef = useRef<any>(null);

    // Open file explorer to select image files
    function openFileExplorer() {
        imageInputRef.current.value = "";
        imageInputRef.current.click();
    }

    return (
        <>
            <input
                className='hidden'
                ref={imageInputRef} //Saves a reference to the input element
                type='file'
                // onChange={handleChange}
                accept='image/jpeg, image/png, image/webp, image/svg+xml'
            />

            {/* Content */}
            <div className='flex flex-col'>

                {/* Choose image button */}
                <button className='btn-hover-effect flex self-center drop-shadow-md rounded-lg py-4 px-7 hover:drop-shadow-none' onClick={openFileExplorer}>
                    <img src='/upload.svg' alt="Image upload icon" />
                    <div className='self-center text-sm pl-1'>Choose Image</div>
                </button>

                <div className='text-center text-grayFont text-xs mt-5'>or drop image here</div>

                {/* File parameters */}
                <div className='flex text-grayFont text-xs mt-8 gap-2.5'>
                    <div className='bg-fileTypeContainer rounded-md py-1 px-2'>png</div>
                    <div className='bg-fileTypeContainer rounded-md py-1 px-2'>jpeg</div>
                    <div className='bg-fileTypeContainer rounded-md py-1 px-2'>webp</div>
                    <div className='bg-fileTypeContainer rounded-md py-1 px-2'>svg</div>
                    <div className='self-center'>up to 1000 x 1000px</div>
                </div>
            </div>
        </>
    );
}

export default UploadButton;
