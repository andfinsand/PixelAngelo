type NewImageButtonProps = {
    clearImage: React.Dispatch<React.SetStateAction<string>>;
}

const NewImageButton: React.FC<NewImageButtonProps> = ({clearImage}) => {

    return (
        <>

            {/* Upscale a new image button */}
            <div className="flex justify-center my-7">
                <button className='flex' type="button" onClick={() => clearImage("")}> {/* clear state of upscaledSrc to trigger component change back to dropzone */}
                    <img src='/new.svg' alt="Go back icon" />
                    <div className='text-grayFont pl-2 hover:text-white duration-200'>New image</div>
                </button>
            </div>

        </>
    );
}

export default NewImageButton;
