import './CustomButton.scss';

const CustomButton = ({ className, onClick, textContent }) => {
    return (
        <button className={className} onClick={onClick}>
            {textContent}
        </button>
    );
};

export default CustomButton;
