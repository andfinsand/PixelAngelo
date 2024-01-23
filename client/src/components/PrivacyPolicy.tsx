import { useState } from 'react';
import PrivacyPolicyButton from './buttons/PrivacyPolicyButton'

const PrivacyPolicy: React.FC = () => {
    const [displayContent, setDisplayContent] = useState<boolean>(false);

    return (
        <>
            <div className='w-[290px] my-0 sm:w-[440px] md:w-[650px] sm:my-10'>

                {/* Privacy policy button */}
                <PrivacyPolicyButton displayContent={displayContent} setDisplayContent={setDisplayContent}/>

                {/* Toggle privacy policy content */}
                <div className={displayContent ? 'visibleContent' : 'hiddenContent'}>
                    {displayContent && (
                        <>
                            <ul className='list-disc font-poppinsSemiBold text-sm mt-7 sm:text-base'>Image Storage and Deletion:
                                <span className='decorator'></span>
                                <li className='text-xs font-poppinsLight ml-10 mt-5 sm:text-sm'>Uploaded images are anonymously stored only temporarily on secured servers for the purpose of enhancing image resolution.</li>
                                <li className='text-xs font-poppinsLight ml-10 mt-5 sm:text-sm'>All source images and processed images are automatically deleted 20 minutes after processing completes. Databases are not built from user images.</li>
                            </ul>
                            <ul className='list-disc font-poppinsSemiBold text-sm mt-7 sm:text-base'>Image Data Usage:
                                <span className='decorator'></span>
                                <li className='text-xs font-poppinsLight ml-10 mt-5 sm:text-sm'>The images you upload and the derived upscaled images are used only to provide this service to you.</li>
                                <li className='text-xs font-poppinsLight ml-10 mt-5 sm:text-sm'>Your image data or insights derived from it are never used to improve the service algorithm or for other purposes.</li>
                            </ul>
                            <ul className='list-disc font-poppinsSemiBold text-sm mt-7 sm:text-base'>Restricted Usage:
                                <span className='decorator'></span>
                                <li className='text-xs font-poppinsLight ml-10 mt-5 sm:text-sm'>Do not upload sensitive documents, images of illegal nature, or images violating other individuals' privacy using this service.</li>
                            </ul>
                        </>
                    )}
                </div>

            </div>
        </>
    );
}

export default PrivacyPolicy;