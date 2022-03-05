import './Search.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFoundArticles } from '../../actions/navigation';

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
						src='/images/magnifying-glass-solid.svg'
						alt='Search icon'
					/>
				</button>
				<input
					className='search__input'
					type='search'
					placeholder='Szukaj tytułu'
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
						src='/images/cancel-close-svgrepo-com.svg'
						alt='Cancel icon'
					/>
				</button>
			</form>
		</div>
	);
};

export default Search;
