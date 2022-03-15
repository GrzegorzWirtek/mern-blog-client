import './Admin.css';
import '../Article/Article.css';

import Button from '../../components/Button/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../../actions/articles';

const Admin = () => {
	const [warning, setWarning] = useState('');
	const [mainImg, setMainImg] = useState('');
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [imgName, setImgName] = useState('');
	const [imgDescription, setImgDescription] = useState('');
	const [mapSrc, setMapSrc] = useState('');
	const [mapDescription, setMapDescription] = useState('');
	const [texts, setTexts] = useState([]);
	const [imgs, setImgs] = useState([]);
	const [imgsDescriptions, setImgsDescriptions] = useState([]);
	const [googleMaps, setGoogleMaps] = useState({ src: '', description: '' });

	const dispatch = useDispatch();

	const handleAddMainImg = () => {
		if (!mainImg.length) {
			return setWarning('Dodaj zdjęcie główne');
		}
		setImgs((prev) => [...prev, mainImg]);
		setImgsDescriptions((prev) => [...prev, '']);
		setImgName('');
		setImgDescription('');
		setWarning('');
	};

	const handleAddTitle = (e) => {
		if (imgs.length < 1) {
			setWarning('Dodaj zdjęcie główne');
			return;
		}
		setTitle(title);
		setWarning('');
	};

	const handleAddText = () => {
		if (!title.length) {
			return setWarning('Wpisz tytuł');
		} else if (!text.length) {
			return setWarning('Wpisz tekst');
		}
		setTexts((prev) => [...prev, text]);
		setText('');
		setWarning('');
	};

	const handleAddImg = () => {
		if (texts.length < imgs.length || !imgs.length) {
			setWarning('Dodaj tekst');
			return;
		}
		setImgs((prev) => [...prev, imgName]);
		setImgName('');
		setWarning('');
	};

	const handleAddImgDescription = () => {
		if (
			imgsDescriptions.length > imgs.length - 1 ||
			imgs.length < 1 ||
			!imgDescription.length
		) {
			return setWarning('Dodaj zdjęcie zanim dodasz opis');
		}
		setImgsDescriptions((prev) => [...prev, imgDescription]);
		setImgDescription('');
	};

	const handleAddMapSrc = () => {
		setGoogleMaps((prev) => ({
			...prev,
			src: mapSrc,
		}));
		setMapSrc('');
	};

	const handleAddMapDescr = () => {
		setGoogleMaps((prev) => ({
			...prev,
			description: mapDescription,
		}));
		setMapDescription('');
	};

	const handleReset = () => {
		setMainImg('');
		setTitle('');
		setText('');
		setImgName('');
		setImgDescription('');
		setTexts([]);
		setImgs([]);
		setImgsDescriptions([]);
		setWarning('');
		setMapSrc('');
		setMapDescription('');
	};

	const getDate = () => {
		const cD = new Date();
		const date = `${cD.getDate()}/${cD.getMonth() + 1}/${cD.getFullYear()}`;
		return date;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!imgs.length || !title.length || !texts.length) {
			return setWarning('Pola wymagane: "Zdjęcie główne", "Tytuł", "Text"');
		}

		const imgsProps = imgs.map((img, index) => {
			return { imgName: img, imgDescription: imgsDescriptions[index] };
		});

		const article = {
			imgNames: imgsProps,
			date: getDate(),
			title: title,
			text: texts,
			comments: [],
			googleMaps,
		};
		dispatch(addArticle(article));
		handleReset();
	};

	const imgNames = imgs.map((name) => (
		<img src={`/images/${name}.png`} alt='' className='article__img' />
	));

	const content = texts.map((text, index) => {
		const p = text.replace(/\\n/g, '\n');

		return (
			<div key={index}>
				<p className='article__text '>{p}</p>
				<div className='article__img-wrapper'>
					<img
						src={`/images/${imgs[index + 1]}.png`}
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
		<section className='article'>
			<h3 className='admin__title'>Dodawanie posta</h3>
			<form className='admin__form' onSubmit={handleSubmit}>
				<p className='admin__warning'>{warning}</p>
				<input
					className='admin__input'
					type='text'
					placeholder='Zdjęcie główne (nazwa)'
					value={mainImg}
					onChange={(e) => setMainImg(e.target.value)}
				/>
				<Button
					type='button'
					click={handleAddMainImg}
					text='Dodaj zdjęcie główne'
					subClass='admin__button'
				/>
				<input
					className='admin__input'
					type='text'
					placeholder='Tytuł'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Button
					type='button'
					click={handleAddTitle}
					text='Dodaj tytuł'
					subClass='admin__button'
				/>

				<textarea
					rows='10'
					wrap='hard'
					className='admin__input'
					type='text'
					placeholder='Text'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button
					type='button'
					click={handleAddText}
					text=' Dodaj text'
					subClass='admin__button'
				/>

				<input
					className='admin__input'
					type='text'
					placeholder='Zdjęcie (nazwa)'
					value={imgName}
					onChange={(e) => setImgName(e.target.value)}
				/>
				<Button
					type='button'
					click={handleAddImg}
					text='Dodaj zdjęcie'
					subClass='admin__button'
				/>

				<input
					className='admin__input'
					type='text'
					placeholder='Opis zdjęcia'
					value={imgDescription}
					onChange={(e) => setImgDescription(e.target.value)}
				/>
				<Button
					type='button'
					click={handleAddImgDescription}
					text='Dodaj opis zdjęcia'
					subClass='admin__button'
				/>
				<input
					className='admin__input'
					type='text'
					placeholder='src mapy Google'
					value={mapSrc}
					onChange={(e) => setMapSrc(e.target.value)}
				/>
				<Button
					type='button'
					click={handleAddMapSrc}
					text='Dodaj src'
					subClass='admin__button'
				/>

				<textarea
					rows='6'
					wrap='hard'
					className='admin__input'
					type='text'
					placeholder='Opis dojazdu'
					value={mapDescription}
					onChange={(e) => setMapDescription(e.target.value)}
				/>
				<Button
					type='button'
					click={handleAddMapDescr}
					text=' Dodaj opis dojazdu'
					subClass='admin__button'
				/>

				<div className='admin__submit-section'>
					<Button
						type='button'
						click={handleReset}
						text='Resetuj'
						subClass='admin__button--cancel'
					/>

					<Button
						type='submit'
						text='Zatwierdź'
						subClass='admin__button--submit'
					/>
				</div>
			</form>

			{imgs.length ? (
				<div className='preview'>
					<p className='preview__title'>Podgląd</p>
					<div className='article__img-wrapper'>{imgNames[0]}</div>
					{title && <p className='article__title'>{title}</p>}
					{title && <p className='article__date'>{getDate()}</p>}
					{content}
					<p className='preview__map'>Src mapy: {googleMaps.src}</p>
					<p className='preview__map'>Opis dojazdu: {googleMaps.description}</p>
				</div>
			) : null}
		</section>
	);
};

export default Admin;
