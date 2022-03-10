import { useSelector } from 'react-redux';
import './Article.css';
import Comments from '../../components/Comments/Comments';

const Article = () => {
	const url = window.location.pathname;
	const currentId = url.slice(9, url.length);

	const articles = useSelector((state) => state.articlesReducer);
	const article = articles.filter((article) => article._id === currentId)[0];
	const { imgNames, date, title, text, comments } = article;

	const content = text.map((part, index) => {
		let photo;
		if (index + 1 < imgNames.length) {
			photo = (
				<>
					<img
						className='article__img'
						src={`/images/${imgNames[index + 1].imgName}.png`}
						alt={imgNames[index + 1].imgDescription}
					/>
					<span className='article__img-description'>
						{imgNames[index + 1].imgDescription}
					</span>
				</>
			);
		}

		return (
			<div key={index}>
				<p className='article__text'>{part}</p>
				{photo}
			</div>
		);
	});

	return (
		<div className='article'>
			<picture>
				<source
					media='(min-width:400px)'
					srcSet={`/images/${imgNames[0].imgName}.png`}
				/>
				<img
					className='article__img'
					src={`/images/${imgNames[0].imgName}-min.png`}
					alt=''
				/>
			</picture>
			<p className='article__title'>{title}</p>
			<p className='article__date'>{date}</p>
			{content}
			<Comments id={currentId} comments={comments} />
		</div>
	);
};

export default Article;
