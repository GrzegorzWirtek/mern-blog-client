import Button from '../../../components/Button/Button';

const AddArticleInput = ({ type, action, change, value, buttonClick }) => {
	const inputElement =
		type === 'input' ? (
			<input
				className='add-article__input'
				type='text'
				placeholder={action}
				onChange={change}
				value={value}
			/>
		) : (
			<textarea
				rows='10'
				wrap='hard'
				className='add-article__textarea'
				type='text'
				placeholder={action}
				onChange={change}
				value={value}
			/>
		);

	return (
		<>
			{inputElement}
			<Button
				type='button'
				text='Dodaj'
				subClass='add-article__button'
				click={buttonClick}
			/>
		</>
	);
};

export default AddArticleInput;
