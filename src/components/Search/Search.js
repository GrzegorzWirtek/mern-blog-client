import './Search.css';

const Search = () => {
	return (
		<div className='search'>
			<form className={'search__form'}>
				<button className='search__button'>
					<img
						className='search__icon'
						src='/images/magnifying-glass-solid.svg'
						alt='Search icon'
					/>
				</button>
				<input
					className='search__input'
					type='text'
					placeholder='Szukaj tytułu'
				/>
			</form>
		</div>
	);
};

export default Search;
