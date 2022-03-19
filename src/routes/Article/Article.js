import { useSelector } from 'react-redux';
import './Article.css';
import Comments from '../../components/Comments/Comments';

const Article = () => {
	const url = window.location.href;
	const currentId = url.slice(-24);

	const articles = useSelector((state) => state.articlesReducer);
	const article = articles.filter((article) => article._id === currentId)[0];
	const { imgNames, date, title, text, comments, googleMaps } = article;

	const content = text.map((part, index) => {
		let photo;
		if (index + 1 < imgNames.length) {
			photo = (
				<div className='article__img-wrapper'>
					<picture>
						<source
							media='(min-width:400px)'
							srcSet={`images/${imgNames[index + 1].imgName}.png`}
						/>
						<img
							className='article__img'
							src={`images/${imgNames[index + 1].imgName}-min.png`}
							alt={imgNames[index + 1].imgDescription}
						/>
					</picture>

					<span className='article__img-description'>
						{imgNames[index + 1].imgDescription}
					</span>
				</div>
			);
		}

		const p = part.replace(/\\n/g, '\n');
		return (
			<div key={index}>
				<p
					className={
						index < text.length - 1 ? 'article__text' : 'article__sources'
					}>
					{p}
				</p>
				{photo}
			</div>
		);
	});

	return (
		<div className='article'>
			<div className='article__img-main-wrapper'>
				<picture>
					<source
						media='(min-width:400px)'
						srcSet={`images/${imgNames[0].imgName}.png`}
					/>
					<img
						className='article__img'
						src={`images/${imgNames[0].imgName}-min.png`}
						alt=''
					/>
				</picture>
			</div>
			<p className='article__title'>{title}</p>
			<p className='article__date'>{date}</p>
			{content}
			<section className='article__map'>
				<iframe
					className='article__google-map'
					title='map'
					src={googleMaps.src}
					loading='lazy'></iframe>
				<p className='article__map-description'>{googleMaps.description}</p>
			</section>
			<Comments id={currentId} comments={comments} />
		</div>
	);
};

export default Article;
