import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

type ExampleSliderProps = {
    label: string;
    exampleBefore: string;
    exampleAfter: string;
};

const ExampleSlider = ({ label, exampleBefore, exampleAfter }: ExampleSliderProps) => {
    return (
        <>
            {/* Before and after example images */}
            <ReactCompareSlider
                itemOne={
                <div className='relative text-center w-full sm:w-[440px] md:w-[313px]'>
                    <div className='absolute top-4 left-4 bg-white/30 backdrop-blur rounded w-16 text-sm py-0.5 md:w-14 md:text-xs'>Before</div>
                    <ReactCompareSliderImage className='rounded-t-lg' src={exampleBefore} alt={`Example of ${label} - Original Image`} />
                </div>
                }
                itemTwo={
                <div className='relative text-center'>
                    <div className='absolute top-4 right-4 bg-white/30 backdrop-blur rounded w-16 text-sm py-0.5 md:w-14 md:text-xs'>After</div>
                    <ReactCompareSliderImage className='rounded-t-lg' src={exampleAfter} alt={`Example of ${label} - Upscaled Image`} />
                </div>
                }
                className='shrink-slider shadow-customShadow'
            />
            {/* Label */}
            <div className='bg-dropZoneColorTo shadow-customShadow rounded-b-lg font-poppinsSemiBold text-center text-base z-10 py-3 md:text-sm'>{label}</div>
        </>
    );
}

export default ExampleSlider;
