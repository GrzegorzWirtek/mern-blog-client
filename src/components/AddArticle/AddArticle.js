import './AddArticle.css';
import '../../routes/Article/Article.css';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addArticle } from '../../actions/articles';
import AddArticleChoose from './addArticleComponents/AddArticleChoose';
import AddArticleInput from './addArticleComponents/AddArticleInput';
import AddArticlePreview from './addArticleComponents/AddArticlePreview';

import {
	ADD_MAIN_IMG,
	ADD_TITLE,
	CHOOSE,
	ADD_IMG,
	ADD_IMG_DESCRIPTION,
	ADD_PARAGRAPH,
	ADD_SOURCES,
	ADD_MAP_DESCRIPTION,
	ADD_MAP_SRC,
	SUBMIT,
} from '../../constans/addArticleFormTypes';

const AddArticle = () => {
	const dispatch = useDispatch();

	const [action, setAction] = useState(ADD_MAIN_IMG);
	const [inputValue, setInputValue] = useState('');
	const [title, setTitle] = useState('');
	const [texts, setTexts] = useState([]);
	const [imgs, setImgs] = useState([]);
	const [imgsDescriptions, setImgsDescription] = useState(['']);
	const [googleMaps, setGoogleMaps] = useState({ src: '', description: '' });

	const handleAddValue = (behavior) => {
		if (inputValue.length < 1) return;
		switch (behavior) {
			case ADD_MAIN_IMG: {
				setImgs((prev) => [...prev, inputValue]);
				setAction(ADD_TITLE);
				break;
			}
			case ADD_TITLE: {
				setAction(ADD_PARAGRAPH);
				setTitle(inputValue);
				break;
			}
			case ADD_PARAGRAPH: {
				setTexts((prev) => [...prev, inputValue]);
				setAction(CHOOSE);
				break;
			}
			case ADD_IMG: {
				setImgs((prev) => [...prev, inputValue]);
				setAction(ADD_IMG_DESCRIPTION);
				break;
			}

			case ADD_IMG_DESCRIPTION: {
				setImgsDescription((prev) => [...prev, inputValue]);
				setAction(ADD_PARAGRAPH);
				break;
			}

			case ADD_SOURCES: {
				setTexts((prev) => [...prev, inputValue]);
				setAction(ADD_MAP_SRC);
				break;
			}
			case ADD_MAP_SRC: {
				setGoogleMaps((prev) => ({
					...prev,
					src: inputValue,
				}));
				setAction(ADD_MAP_DESCRIPTION);
				break;
			}
			case ADD_MAP_DESCRIPTION: {
				setGoogleMaps((prev) => ({
					...prev,
					description: inputValue,
				}));
				setAction(SUBMIT);
				break;
			}
			default:
				return;
		}
		return setInputValue('');
	};

	const handleReset = () => {
		setInputValue('');
		setTitle('');
		setTexts([]);
		setImgs([]);
		setImgsDescription([]);
		setGoogleMaps({ src: '', description: '' });
	};

	const getDate = () => {
		const cD = new Date();
		const date = `${cD.getDate()}/${cD.getMonth() + 1}/${cD.getFullYear()}`;
		return date;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (action !== SUBMIT) return;
		const imgsFull = imgs.map((img, index) => {
			return { imgName: img, imgDescription: imgsDescriptions[index] };
		});
		const article = {
			imgNames: imgsFull,
			date: getDate(),
			title: title,
			text: texts,
			comments: [],
			googleMaps,
		};
		dispatch(addArticle(article));
		handleReset();
	};

	const inputs =
		action === CHOOSE ? (
			<AddArticleChoose
				clicks={[() => setAction(ADD_IMG), () => setAction(ADD_SOURCES)]}
				texts={['Co chcesz teraz zrobić?', 'Dodaj zdjęcie', 'Dodaj źródła']}
				classes={['add-article__button', 'add-article__button']}
			/>
		) : action === ADD_PARAGRAPH ||
		  action === ADD_MAP_DESCRIPTION ||
		  action === ADD_SOURCES ? (
			<AddArticleInput
				type='textarea'
				action={action}
				change={(e) => setInputValue(e.target.value)}
				value={inputValue}
				buttonClick={() => handleAddValue(action)}
			/>
		) : action === SUBMIT ? (
			<AddArticleChoose
				clicks={[
					() => {
						handleReset();
						setAction(ADD_MAIN_IMG);
					},
					handleSubmit,
				]}
				texts={['', 'Resetuj', 'Zatwierdź']}
				classes={['add-article__button--cancel', 'add-article__button--submit']}
			/>
		) : (
			<AddArticleInput
				type='input'
				action={action}
				change={(e) => setInputValue(e.target.value)}
				value={inputValue}
				buttonClick={() => handleAddValue(action)}
			/>
		);

	return (
		<section className='article add-article__wrapper'>
			<h3 className='add-article__title'>Dodawanie posta</h3>
			<form className='add-article__form' onSubmit={handleSubmit}>
				{inputs}
			</form>
			{imgs.length ? (
				<AddArticlePreview
					imgs={imgs}
					imgsDescriptions={imgsDescriptions}
					texts={texts}
					date={getDate()}
					title={title}
					googleMaps={googleMaps}
				/>
			) : null}
		</section>
	);
};

export default AddArticle;
