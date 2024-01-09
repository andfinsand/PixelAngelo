import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <>
        <div className='flex pt-9'>
            <Image src='/logo.png' alt='PixelAngelo logo' width={100} height={100} />
            <div className='flex flex-col self-center gap-1'>
                <h1 className='text-3xl font-poppinsBold tracking-customSpacing'>Pixel<span className='text-transparent bg-clip-text bg-gradient-to-r from-logoYellow to-logoPink'>Angelo</span></h1>
                <h2 className='text-[15px] tracking-wide'>Enhance images with 2x resolution</h2>
            </div>
        </div>
        </>
    );
}

export default Header;