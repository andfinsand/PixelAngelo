import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div className='flex flex-col text-center gap-2 -mt-3 mb-9'>
                <p className='text-xs font-light text-footerColor'>Designed with Figma, built with Next.js and Flask</p>
                <p className='text-xs font-light text-footerColor'> By&nbsp;

                    {/* Portfolio link */}
                    <a
                        href='https://www.andrewfinsand.dev/'
                        target='_blank'
                        aria-label="open link to Andrew Finsands portfolio"
                        className='hover:text-white duration-200 whitespace-nowrap'
                    >
                        Andrew Finsand
                    </a>
                </p>

                {/* Github icon */}
                <a
                    href='https://github.com/andfinsand/PixelAngelo'
                    className='self-center'>
                    <Image
                        src='/github.svg'
                        alt='Github icon'
                        width={98}
                        height={96}
                        className='svg w-5 sm:w-6'
                    />
                </a>
            </div>
        </>
    );
}

export default Footer;
