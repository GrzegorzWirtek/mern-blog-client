import './Button.css';
const Button = ({ type, text, subClass, click }) => {
	return (
		<button type={type} className={`button ${subClass}`} onClick={click}>
			{text}
		</button>
	);
};

export default Button;
