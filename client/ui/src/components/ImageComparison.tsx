import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
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
                <div className='relative mt-5'>

                    {/* Image comparison */}
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage className="slider-img" src={originalSrc} alt="Original Image" />}
                        itemTwo={<ReactCompareSliderImage className="slider-img" src={upscaledSrc} alt='Upscaled Image' />}
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