import './Search.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFoundArticles } from '../../actions/navigation';

const SEARCH_ICON_SEARCH_URL = '/images/magnifying-glass-solid.svg';
const SEARCH_ICON_CANCEL_URL = '/images/cancel-close-svgrepo-com.svg';
const SEARCH_PLACEHOLDER = 'Sukaj tytułu';

const Search = () => {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.articlesReducer);

	//wyzerowanie tablicy znalezionych artykułów, po wyjściu i kolejnym wejściu na "Blog"
	useEffect(() => {
		if (!searchValue.length) {
			dispatch(setFoundArticles([]));
		}
	}, [dispatch, searchValue.length]);

	const searchArticle = () => {
		const articlesFound = articles.filter((article) =>
			article.title.toLowerCase().includes(searchValue.toLowerCase()),
		);
		dispatch(setFoundArticles(articlesFound));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		searchArticle();
	};

	return (
		<div className='search'>
			<form className={'search__form'} onSubmit={handleSubmit}>
				<button className='search__button' type='submit'>
					<img
						className='search__icon'
						src={SEARCH_ICON_SEARCH_URL}
						alt='Search icon'
					/>
				</button>
				<input
					className='search__input'
					spellCheck='false'
					type='search'
					placeholder={SEARCH_PLACEHOLDER}
					onChange={(e) => setSearchValue(e.target.value)}
					value={searchValue}
				/>
				<button
					className={`cancel__button ${
						searchValue.length ? 'cancel__button--visible' : ''
					}`}
					type='button'
					onClick={() => setSearchValue('')}>
					<img
						className='cancel__icon'
						src={SEARCH_ICON_CANCEL_URL}
						alt='Cancel icon'
					/>
				</button>
			</form>
		</div>
	);
};

export default Search;
