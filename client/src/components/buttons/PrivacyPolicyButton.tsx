type PrivacyPolicyButtonProps = {
    displayContent: boolean;
    setDisplayContent: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrivacyPolicyButton: React.FC<PrivacyPolicyButtonProps> = ({displayContent, setDisplayContent}) => {
    return (
        <>
            {/* Privacy policy button */}
            <button className='flex text-lg font-poppinsBold hover:text-grayFont duration-200 sm:text-xl' onClick={() => setDisplayContent(!displayContent)}>
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
