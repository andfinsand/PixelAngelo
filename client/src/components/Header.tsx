import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <>
            <div className='flex pt-5 sm:pt-9'>
                <Image src='/logo.png' alt='PixelAngelo logo' width={100} height={100} priority={true} className='w-16 sm:w-[100px]'/>
                <div className='flex flex-col self-center gap-1'>
                    <h1 className='text-xl font-poppinsBold tracking-customSpacing sm:text-3xl'>Pixel<span className='text-transparent bg-clip-text bg-gradient-to-r from-logoYellow to-logoPink'>Angelo</span></h1>
                    <h2 className='text-[10px] tracking-wide sm:text-[15px]'>Enhance images with 2x resolution</h2>
                </div>
            </div>
        </>
    );
}

export default Header;