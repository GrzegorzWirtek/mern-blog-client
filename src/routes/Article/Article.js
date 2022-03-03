import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Article.css';

const Article = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const url = window.location.pathname;
	const currentId = url.slice(9, url.length);

	const articles = useSelector((state) => state.articlesReducer);
	const article = articles.filter((article) => article._id === currentId)[0];
	const { imgName, date, title, text } = article;
	const imgDescription = imgName.slice(0, imgName.length - 2);

	return (
		<>
			<div className='article'>
				<p>Aktualne ID: {currentId}</p>
				<img
					className='article__img'
					src={`/images/${imgName}.png`}
					alt={`Zdjęcie przedstawiające ${imgDescription}`}
				/>
				<p className='article__title'>{title}</p>
				<p className='article__date'>{date}</p>
				<p className='article__text'>{text}</p>
			</div>
		</>
	);
};

export default Article;
