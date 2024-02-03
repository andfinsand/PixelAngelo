import { useState } from 'react';
import PrivacyPolicyButton from './buttons/PrivacyPolicyButton'

const PrivacyPolicy = () => {
    const [displayContent, setDisplayContent] = useState<boolean>(false);

    return (
        <>
            <div className='w-[320px] my-0 sm:w-[440px] md:w-[650px] sm:my-10'>

                {/* Privacy policy button */}
                <PrivacyPolicyButton displayContent={displayContent} setDisplayContent={setDisplayContent}/>

                {/* Toggle privacy policy content */}
                <div className={displayContent ? 'visibleContent' : 'hiddenContent'}>
                    {displayContent && (
                        <>
                            <ul className='list-disc font-poppinsSemiBold text-sm mt-7 sm:text-lg'>Image Storage and Deletion:
                                <span className='decorator'></span>
                                <li className='text-xs font-poppinsLight ml-10 mt-5 sm:text-sm sm:leading-relaxed'>Uploaded images are anonymously and temporarily stored on secured servers for the purpose of enhancing image resolution.</li>
                                <li className='text-xs font-poppinsLight ml-10 mt-5 sm:text-sm sm:leading-relaxed'>All source images and processed images are automatically deleted 48 hours after processing. Databases are not built from user images.</li>
                            </ul>
                            <ul className='list-disc font-poppinsSemiBold text-sm mt-7 sm:text-lg'>Image Data Usage:
                                <span className='decorator'></span>
                                <li className='text-xs font-poppinsLight ml-10 mt-5 sm:text-sm sm:leading-relaxed'>The images you upload and the derived upscaled images are used only to provide this service to you.</li>
                                <li className='text-xs font-poppinsLight ml-10 mt-5 sm:text-sm sm:leading-relaxed'>Your image data or insights derived from it are never used to improve the service algorithm or for other purposes.</li>
                            </ul>
                            <ul className='list-disc font-poppinsSemiBold text-sm mt-7 sm:text-lg'>Restricted Usage:
                                <span className='decorator'></span>
                                <li className='text-xs font-poppinsLight ml-10 mt-5 sm:text-sm sm:leading-relaxed'>Do not upload sensitive documents, images of illegal nature, or images violating other individuals&apos; privacy using this service.</li>
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default PrivacyPolicy;
