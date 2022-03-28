import Button from '../../Button/Button';

const AddArticleChoose = ({ clicks, texts, classes }) => {
	return (
		<>
			<p className='add-article__choose'>{texts[0]}</p>
			<Button
				type='button'
				text={texts[1]}
				subClass={classes[0]}
				click={clicks[0]}
			/>
			<Button
				type='button'
				text={texts[2]}
				subClass={classes[1]}
				click={clicks[1]}
			/>
		</>
	);
};

export default AddArticleChoose;
