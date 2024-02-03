import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import DownloadButton from './buttons/DownloadButton';
import NewImageButton from './buttons/NewImageButton';

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

const ImageComparison = ({upscaledSrc, setUpscaledSrc, originalFileName, originalSrc, originalWidth, originalHeight, upscaledWidth, upscaledHeight }: ImageComparisonProps) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            { upscaledSrc && (
                <div className='relative w-[350px] mt-5 sm:w-[440px] md:w-[650px]'>

                    {/* Original and upscaled resolution sizes */}
                    <div className='flex justify-between text-xs text-white mb-3 md:text-sm'>
                        <div className='bg-fileTypeContainer rounded px-2.5 py-0.5'>{originalWidth} x {originalHeight} px</div>
                        <div className='bg-fileTypeContainer rounded px-2.5 py-0.5'>{upscaledWidth} x {upscaledHeight} px</div>
                    </div>

                    {/* Image comparison */}
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={originalSrc} alt='Original Image' />}
                        itemTwo={<ReactCompareSliderImage src={upscaledSrc} alt='Upscaled Image' />}
                        id='shrink-slider-main'
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
