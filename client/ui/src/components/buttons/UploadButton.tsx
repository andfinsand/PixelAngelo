import { useRef } from "react";

const UploadButton: React.FC<{ setFile: React.Dispatch<React.SetStateAction<File | null>>, processImageFile: (file: File) => void }> = ({ setFile, processImageFile }) => {
    const imageInputRef = useRef<any>(null);

    // Open file explorer to view image files
    function openFileExplorer() {
        imageInputRef.current.value = "";
        imageInputRef.current.click();
    }

    // Select image files
    function selectImageFile(e: any) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFile(file);
            processImageFile(file); // Trigger the fetch API immediately after the file is added
        }
    }

    return (
        <>

            {/* Hidden input field to receive image file */}
            <input
                className='hidden'
                ref={imageInputRef} //Saves a reference to the input element
                type='file'
                onChange={selectImageFile}
                accept='image/jpeg, image/png, image/webp, image/svg+xml'
            />

            {/* Choose image button */}
            <button className='btn-hover-effect flex self-center drop-shadow-md rounded-lg py-4 px-7 hover:drop-shadow-none' type="button" onClick={openFileExplorer}>
                <img src='/upload.svg' alt="Image upload icon" />
                <div className='self-center text-sm pl-1'>Choose Image</div>
            </button>

        </>
    );
}

export default UploadButton;
