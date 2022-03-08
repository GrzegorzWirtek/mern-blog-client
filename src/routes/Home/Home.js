import './Home.css';
import { useSelector } from 'react-redux';
import ArticleMin from '../../components/ArticleMin/ArticleMin';

const Home = () => {
	const title = 'Miejsca na Mazowszu, które koniecznie musisz odwiedzić';
	const description =
		'Nieznane zakątki odległych kontynentów, dzikie i nieodkryte krainy oraz tajemnicze rejony, gdzie nie postąpiła ludzka stopa - po co to komu, skoro województwo mazowieckie ma tyle do zaoferowania? Na łamach niniejszego bloga opisuję swoje wrażenia, których doświadczyłem odwiedzając wiele niezwykle ciekawych i często mało znanych miejsc znajdujących się w promieniu zaledwie kilkudziesięciu kilometrów od Warszawy. Wszystkich miłośników spacerów i małych weekendowych wycieczek zapraszam do lektury.';
	const recentTitle = 'Najnowsze posty';

	const articles = useSelector((state) => state.articlesReducer);
	const recentArticles = articles.map((article, index) =>
		index < 3 ? <ArticleMin key={index} data={article} /> : null,
	);

	return (
		<main className='home'>
			<section className='home__title-wrapper'>
				<h1 className='home__title'>{title}</h1>
				<p className='home__decription'>{description}</p>
			</section>
			<section className='recent'>
				<p className='recent__title'>{recentTitle}</p>
				<div className='recent__articles'>{recentArticles}</div>
			</section>
		</main>
	);
};

export default Home;
