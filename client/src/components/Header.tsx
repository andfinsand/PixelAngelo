import Image from 'next/image';

const Header = () => {
    return (
        <>
            <div className='flex mt-9'>
                <Image
                    src='/logo.png'
                    alt='PixelAngelo logo'
                    width={300}
                    height={300}
                    priority={true}
                    className='w-20 sm:w-[100px]'
                />
                <div className='flex flex-col self-center gap-1'>
                    <h1 className='text-2xl font-poppinsBold tracking-customSpacing sm:text-3xl'>Pixel<span className='text-transparent bg-clip-text bg-gradient-to-r from-logoYellow to-logoPink'>Angelo</span></h1>
                    <h2 className='text-xs tracking-wide sm:text-[15px]'>Enhance images with 2x resolution</h2>
                </div>
            </div>
        </>
    );
}

export default Header;
