import '../../../routes/Article/Article.css';

const AddArticlePreview = ({
	imgs,
	imgsDescriptions,
	texts,
	date,
	title,
	googleMaps,
}) => {
	const imgNames = imgs.map((name) => (
		<img src={`images/${name}.png`} alt='' className='article__img' />
	));

	const content = texts.map((text, index) => {
		const p = text.replace(/\\n/g, '\n');
		return (
			<div key={index}>
				<p className='article__text '>{p}</p>
				<div className='article__img-wrapper'>
					<img
						src={`images/${imgs[index + 1]}.png`}
						alt=''
						className='article__img'
					/>
					<span className='article__img-description'>
						{imgsDescriptions[index + 1]}
					</span>
				</div>
			</div>
		);
	});

	return (
		<div className='preview'>
			<p className='preview__title'>Podgląd</p>
			<div className='article__img-wrapper'>{imgNames[0]}</div>
			{title && <p className='article__title'>{title}</p>}
			{title && <p className='article__date'>{date}</p>}
			{content}
			{googleMaps.src.length ? (
				<p className='preview__map'>Src mapy: {googleMaps.src}</p>
			) : null}
			{googleMaps.description.length ? (
				<p className='preview__map'>Opis dojazdu: {googleMaps.description}</p>
			) : null}
		</div>
	);
};

export default AddArticlePreview;
