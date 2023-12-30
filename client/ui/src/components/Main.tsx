import UploadButton from './buttons/UploadButton'

const Main: React.FC = () => {
    return (
        <>
            {/* Dropzone */}
            <div className='flex flex-col justify-center self-center rounded-lg bg-dropZoneColor w-600 h-400 m-10 p-6' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px' }}>
                {/* Dotted border */}
                <div className='flex justify-center border-2 border-dotted border-dottedColor rounded-md w-full h-full'>

                    {/* Content */}
                    <div className='flex self-center'>
                        <div className='flex flex-col'>

                            {/* Upload button */}
                            <UploadButton />

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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;