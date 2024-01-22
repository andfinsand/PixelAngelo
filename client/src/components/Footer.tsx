const Footer: React.FC = () => {
    return (
        <>
            <div className='flex flex-col self-center text-center gap-2 pb-5 sm:pb-9'>
                <p className='text-[10px] font-light text-footerColor sm:text-xs'>Designed with Figma, built with Next.js and Flask</p>
                <p className='text-[10px] font-light text-footerColor sm:text-xs'> by&nbsp;
                    <a
                        href='https://www.andrewfinsand.dev/'
                        target='_blank'
                        aria-label="open link to Andrew Finsand's portfolio"
                        className='hover:text-white duration-200 whitespace-nowrap'
                    >
                        Andrew Finsand
                    </a>
                </p>
                <a
                    href='https://github.com/andfinsand/PixelAngelo'
                    className='self-center'>
                    <img
                        src='/github.svg'
                        alt='Github icon'
                        className='svg w-5 sm:w-6'
                    />
                </a>
            </div>
        </>
    );
}

export default Footer;