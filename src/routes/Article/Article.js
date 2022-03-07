import { useSelector } from 'react-redux';
import './Article.css';
import Comments from '../../components/Comments/Comments';

const Article = () => {
	const url = window.location.pathname;
	const currentId = url.slice(9, url.length);

	const articles = useSelector((state) => state.articlesReducer);
	const article = articles.filter((article) => article._id === currentId)[0];
	const { imgName, date, title, text, comments } = article;
	const imgDescription = imgName.slice(0, imgName.length - 2);

	return (
		<div className='article'>
			<img
				className='article__img'
				src={`/images/${imgName}.png`}
				alt={`Zdjęcie przedstawiające ${imgDescription}`}
			/>
			<p className='article__title'>{title}</p>
			<p className='article__date'>{date}</p>
			<p className='article__text'>{text}</p>
			<Comments id={currentId} comments={comments} />
		</div>
	);
};

export default Article;
