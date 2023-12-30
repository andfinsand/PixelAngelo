import UploadButton from './buttons/UploadButton'

const Main: React.FC = () => {
    return (
        <>
            {/* Upload area */}
            <div className='flex flex-col justify-center self-center rounded-lg bg-uploadAreaColor w-600 h-400 m-10 p-6' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px' }}>
                {/* Dotted border */}
                <div className='flex justify-center border-2 border-dotted border-dottedColor rounded-md w-full h-full'>
                    {/* Content wrapper */}
                    <div className='flex self-center'>
                        {/* Upload button */}
                        <UploadButton />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;