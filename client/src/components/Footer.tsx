const Footer: React.FC = () => {
    return (
        <>
            <div className='flex flex-col self-center text-center pb-5 sm:pb-9'>
                <p className='text-[10px] font-light text-footerColor sm:text-xs'>Designed with Figma and built with Next.js and Flask by&nbsp;
                    <a
                        href='https://www.andrewfinsand.dev/'
                        target='_blank'
                        aria-label="open link to Andrew Finsand's portfolio"
                        className='hover:text-white duration-200 whitespace-nowrap'
                    >
                        Andrew Finsand
                    </a>
                </p>
            </div>
        </>
    );
}

export default Footer;