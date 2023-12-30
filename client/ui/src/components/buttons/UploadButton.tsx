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

            {/* Hidden input field to receive image file */}
            <input
                className='hidden'
                ref={imageInputRef} //Saves a reference to the input element
                type='file'
                // onChange={handleChange}
                accept='image/jpeg, image/png, image/webp, image/svg+xml'
            />

            {/* Choose image button */}
            <button className='btn-hover-effect flex self-center drop-shadow-md rounded-lg py-4 px-7 hover:drop-shadow-none' onClick={openFileExplorer}>
                <img src='/upload.svg' alt="Image upload icon" />
                <div className='self-center text-sm pl-1'>Choose Image</div>
            </button>

        </>
    );
}

export default UploadButton;
