import './Home.css';
import ArticleMin from '../../components/ArticleMin/ArticleMin';
import Button from '../../components/Button/Button';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HOME_TITLE = 'Miejsca na Mazowszu, które koniecznie musisz odwiedzić';
const HOME_DESCRIPTION =
	'W promieniu zaledwie kilkudziesięciu kilometrów od Warszawy są miejsca, które potrafią zaskoczyć swoim urokiem. Marząc o dalekich podróżach zapominamy, że czasem najlepsze rzeczy mamy tuż na wyciągnięcie ręki. Województwo mazowieckie ma do zaoferowania więcej niż mogłoby się nam wydawać. Nie trzeba długo planować, pakować się - wystarczy wyjść z domu i ruszyć przed siebie. Zapraszam do lektury i poznania kilku niesamowitych punktów na mapie, które czekają tylko żeby je odwiedzić.';
const HOME_RECENT_POSTS = 'Najnowsze posty';
const HOME_NAVIGATE_BUTTON_TEXT = 'Wszystkie posty';

const Home = () => {
	const articles = useSelector((state) => state.articlesReducer);
	const recentArticles = articles.map((article, index) =>
		index < 3 ? <ArticleMin key={index} data={article} /> : null,
	);
	const navigate = useNavigate();

	return (
		<main className='home'>
			<section className='home__title-wrapper'>
				<h1 className='home__title'>{HOME_TITLE}</h1>
				<p className='home__decription'>{HOME_DESCRIPTION}</p>
			</section>
			<section className='recent'>
				<p className='recent__title'>{HOME_RECENT_POSTS}</p>
				<div className='recent__articles'>{recentArticles}</div>
			</section>
			<div className='home__button-wrapper'>
				<Button
					text={HOME_NAVIGATE_BUTTON_TEXT}
					type='button'
					click={() => navigate('/articles')}
				/>
			</div>
		</main>
	);
};

export default Home;
