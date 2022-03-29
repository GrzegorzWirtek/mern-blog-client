import './DeleteArticle.css';
import { useSelector } from 'react-redux';

const DeleteArticle = () => {
	const state = useSelector((state) => state.articlesReducer);

	const articles = state.map((article) => {
		return (
			<article className='delete-article__item'>
				<img
					className='delete-article__img'
					src={`images/${article.imgNames[0].imgName}-min.png`}
					alt={article.imgDescription}
				/>
			</article>
		);
	});

	return (
		<>
			<p>Delete article section</p>
			{articles}
		</>
	);
};

export default DeleteArticle;
