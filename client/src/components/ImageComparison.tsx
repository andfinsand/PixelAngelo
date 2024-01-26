import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import NewImageButton from "./buttons/NewImageButton";
import DownloadButton from "./buttons/DownloadButton";

type ImageComparisonProps = {
    upscaledSrc: string;
    setUpscaledSrc: React.Dispatch<React.SetStateAction<string>>;
    originalFileName: string;
    originalSrc: string;
    originalWidth: number;
    originalHeight: number;
    upscaledWidth: number;
    upscaledHeight: number;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({upscaledSrc, setUpscaledSrc, originalFileName, originalSrc, originalWidth, originalHeight, upscaledWidth, upscaledHeight }) => {

    return (
        <div className='flex flex-col justify-center items-center'>
            { upscaledSrc && (
                <div className='relative mt-5 w-[290px] sm:w-[500px] md:w-[700px]'>

                        {/* Upscaled and original resolution sizes */}
                        <div className='flex justify-between text-xs text-white mb-3 md:text-sm'>
                            <div className='bg-fileTypeContainer rounded px-2.5 py-0.5'>{originalWidth} x {originalHeight} px</div>
                            <div className='bg-fileTypeContainer rounded px-2.5 py-0.5'>{upscaledWidth} x {upscaledHeight} px</div>
                        </div>

                        {/* Image comparison */}
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage className='slider-img' src={originalSrc} alt='Original Image' />}
                            itemTwo={<ReactCompareSliderImage className='slider-img' src={upscaledSrc} alt='Upscaled Image' />}
                            className='shadow-customShadow'
                        />

                        {/* Download upscaled image */}
                        <DownloadButton upscaledSrc={upscaledSrc} originalFileName={originalFileName} />

                        {/* Upscale a new image */}
                        <NewImageButton clearImage={setUpscaledSrc} />
                    </div>

            )}
        </div>
    );
};

export default ImageComparison;