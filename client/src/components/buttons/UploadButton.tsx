import { useRef } from 'react';

type UploadButtonProps = {
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    processImageFile: (file: File) => void;
}

const UploadButton = ({ setFile, processImageFile }: UploadButtonProps) => {

    const imageInputRef = useRef<any>(null);

    // Open file explorer to view image files
    function openFileExplorer() {
        imageInputRef.current.value = '';
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
            <button
                className='btn-hover-effect flex self-center drop-shadow-md rounded-md px-5 py-3 hover:drop-shadow-none sm:rounded-lg sm:px-7 sm:py-4'
                type='button'
                onClick={openFileExplorer}>
                <img
                    src='/upload.svg'
                    alt='Image upload icon'
                    className='w-5 sm:w-6'
                />
                <div className='self-center text-xs pl-1 sm:text-sm'>Select Image</div>
            </button>
        </>
    );
}

export default UploadButton;
