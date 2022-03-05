import './Articles.css';
import ArticleMin from '../../components/ArticleMin/ArticleMin';
import Search from '../../components/Search/Search';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Article = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const state = useSelector((state) => state);

	let currentArticles = null;
	if (state.navigationReducer.foundArticles.length) {
		currentArticles = state.navigationReducer.foundArticles;
	} else {
		currentArticles = state.articlesReducer;
	}

	const articles = currentArticles.map((article) => (
		<ArticleMin key={article._id} data={article} />
	));

	return (
		<section className='articles'>
			<Search />
			{articles}
		</section>
	);
};

export default Article;
