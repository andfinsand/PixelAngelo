import { useState } from "react";
import Image from 'next/image';

interface ImageComparisonProps {
    upscaledSrc: string;
    setUpscaledSrc: React.Dispatch<React.SetStateAction<string>>;
    originalFileName: string;
    originalSrc: string;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({upscaledSrc, setUpscaledSrc, originalFileName, originalSrc}) => {

    // Download file with unique file name
    const handleDownload = () => {
        fetch(upscaledSrc)
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            // download the upscaled file with the name of the file being the variable "filenName"
            link.setAttribute('download', originalFileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    return (
        <div className="flex flex-col justify-center items-center w-[800px]">
            { upscaledSrc && (
                <>

                {/* Upscaled image */}
                <div className="absolute" style={{pointerEvents: "none"}}>
                    <Image
                        src={upscaledSrc}
                        // onClick={handleImageClick}
                        alt="Upscaled Image"
                        width={500}
                        height={500}
                        style={{
                            overflow: "hidden",
                            // clipPath: `inset(0 0 0 ${sliderPosition}px)`
                        }}
                    />
                </div>
                </>

            )}
        </div>
    );
};

export default ImageComparison;