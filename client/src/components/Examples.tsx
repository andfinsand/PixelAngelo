import ExampleSlider from './ExampleSlider';

const Examples = () => {
    return (
        <>
            <div className='w-11/12 sm:w-[440px] md:w-[650px]'>
                <h1 className='font-poppinsBold text-xl sm:text-2xl'>Upscale images by 2x using AI</h1>

                {/* How it works */}
                <h1 className='font-poppinsSemiBold text-lg mt-12'>How it works:
                    <span className='decorator'></span>
                </h1>
                <div className='font-poppinsLight text-sm mt-5 sm:leading-relaxed'>PixelAngelo uses AI to double image resolution while also enhancing quality. Select an image, wait for it to upscale, and download the newly upscaled image. Compare image resolution and quality using the slider. Users can submit up to 10 images per day.</div>

                {/* Examples content */}
                <h1 className='font-poppinsSemiBold text-lg mt-7 sm:mt-10'>Don&apos;t have an image on hand?
                    <span className='decorator'></span>
                </h1>
                <div className='font-poppinsLight text-sm mt-5'>Try out some examples:</div>

                {/* Image examples */}
                {/* First set */}
                <div className='flex-col w-full gap-6 mt-9 md:mt-10 md:flex md:flex-row'>
                    {/* Faces */}
                    <div className='flex flex-col'>
                        <ExampleSlider
                            label='Faces'
                            exampleBefore='example-faces-original.png'
                            exampleAfter='example-faces-upscaled.png'
                        />
                    </div>
                    {/* Nature */}
                    <div className='flex flex-col mt-9 md:mt-0'>
                        <ExampleSlider
                            label='Nature'
                            exampleBefore='example-nature-original.png'
                            exampleAfter='example-nature-upscaled.png'
                        />
                    </div>
                </div>

                {/* Image examples */}
                {/* Second set */}
                <div className='flex-col gap-6 mt-9 md:mt-12 md:flex md:flex-row'>
                    {/* Landscape */}
                    <div className='flex flex-col'>
                        <ExampleSlider
                            label='Landscape'
                            exampleBefore='example-landscape-original.png'
                            exampleAfter='example-landscape-upscaled.png'
                        />
                    </div>
                    {/* Wildlife */}
                    <div className='flex flex-col mt-9 md:mt-0'>
                        <ExampleSlider
                            label='Wildlife'
                            exampleBefore='example-wildlife-original.png'
                            exampleAfter='example-wildlife-upscaled.png'
                        />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Examples;
