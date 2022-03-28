import './Button.css';
const Button = ({ type, text, subClass, click, isDisabled }) => {
	return (
		<button
			type={type}
			className={`button ${subClass}`}
			onClick={click}
			disabled={isDisabled}>
			{text}
		</button>
	);
};

export default Button;
