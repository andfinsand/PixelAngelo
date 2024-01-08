import { useState } from "react";
import Image from "next/image";
import NewImageButton from "./buttons/NewImageButton";
import DownloadButton from "./buttons/DownloadButton";

type ImageComparisonProps = {
    upscaledSrc: string;
    setUpscaledSrc: React.Dispatch<React.SetStateAction<string>>;
    originalFileName: string;
    originalSrc: string;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({upscaledSrc, setUpscaledSrc, originalFileName, originalSrc}) => {

    return (
        <div className='flex flex-col justify-center items-center'>
            { upscaledSrc && (
                <div className='relative'>
                    {/* <div className="flex flex-col relative"> */}

                        {/* Upscaled image */}
                        <div className='absolute shadow-customShadow' style={{pointerEvents: 'none'}}> {/* this line may need an "absolute" with "relative" in the parent div, once the two images are aligned over each other */}
                            <Image
                                src={upscaledSrc}
                                // onClick={handleImageClick}
                                alt='Upscaled Image'
                                width={600}
                                height={600}
                                style={{
                                    overflow: 'hidden',
                                    // clipPath: `inset(0 0 0 ${sliderPosition}px)`
                                }}
                            />
                        </div>

                        {/* Original image */}
                        <div >
                            <Image
                                src={originalSrc}
                                // onClick={handleImageClick}
                                alt="Original Image"
                                width={600}
                                height={600}
                            />
                        </div>

                        {/* Download upscaled image */}
                        <DownloadButton upscaledSrc={upscaledSrc} originalFileName={originalFileName} />

                        {/* Upscale a new image */}
                        <NewImageButton clearImage={setUpscaledSrc} />
                    {/* </div> */}

                </div>
            )}
        </div>
    );
};

export default ImageComparison;