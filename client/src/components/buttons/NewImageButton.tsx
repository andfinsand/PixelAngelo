import Image from 'next/image';

type NewImageButtonProps = {
    clearImage: React.Dispatch<React.SetStateAction<string>>;
}

const NewImageButton = ({clearImage}: NewImageButtonProps) => {
    return (
        <>
            {/* Upscale a new image button */}
            <div className='flex justify-center my-7'>
                <button
                    className='svg flex hover:'
                    type='button'
                    onClick={() => clearImage("")}> {/* clear state of upscaledSrc to trigger component change back to dropzone */}
                    <Image
                        src='/new.svg'
                        alt='Go back icon'
                        width={20}
                        height={20}
                        className='w-4 sm:w-5'
                    />
                    <div className='text-grayFont text-sm pl-2 hover:text-white duration-200 sm:text-base'>New image</div>
                </button>
            </div>
        </>
    );
}

export default NewImageButton;
