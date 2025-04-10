type PrivacyPolicyButtonProps = {
    displayContent: boolean;
    setDisplayContent: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrivacyPolicyButton = ({displayContent, setDisplayContent}: PrivacyPolicyButtonProps) => {
    return (
        <>
            {/* Privacy policy button */}
            <button className='flex text-xl font-poppinsBold hover:text-grayFont duration-200 sm:text-2xl' onClick={() => setDisplayContent(!displayContent)}>
                Privacy Policy
                <span
                    className={`caret self-center duration-200 ml-3 ${displayContent ? 'transform rotate-90' : ''}`}
                >
                </span>
            </button>
        </>
    );
}

export default PrivacyPolicyButton;
