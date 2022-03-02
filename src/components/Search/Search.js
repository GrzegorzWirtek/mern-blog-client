import './Search.css';

const Search = () => {
	return (
		<div className='search'>
			<form className={'search__form'}>
				<input className='search__input' type='text' />
				<button className='search__button'>
					<img
						className='search__icon'
						src='/images/magnifying-glass-solid.svg'
						alt='Search icon'
					/>
				</button>
			</form>
		</div>
	);
};

export default Search;
