const Footer: React.FC = () => {
    return (
        <>
            <div className='flex flex-col self-center pb-9'>
                <p className='text-xs font-light text-footerColor'>Designed with Figma and built with Next.js and Flask by&nbsp;
                    <a
                        href='https://www.andrewfinsand.dev/'
                        target='_blank'
                        aria-label="open link to Andrew Finsand's portfolio"
                        className='duration-200 hover:text-white'
                    >
                        Andrew Finsand
                    </a>
                </p>
            </div>
        </>
    );
}

export default Footer;