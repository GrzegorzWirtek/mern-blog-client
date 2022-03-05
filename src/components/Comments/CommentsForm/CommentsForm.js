import './CommentsForm.css';

import { addComment } from '../../../actions/articles';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CommentsForm = ({ id }) => {
	const [name, setName] = useState('');
	const [comment, setComment] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newDate = new Date();
		const date = newDate.toLocaleString().replaceAll('.', '/');
		dispatch(addComment({ id, name, comment, date }));
	};

	return (
		<section className='comments-form'>
			<form className='comments-form__form' onSubmit={handleSubmit}>
				<input
					type='text'
					className='comments-form__name-input'
					placeholder='Imię lub pseudonim'
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<textarea
					cols='30'
					rows='10'
					className='comments-form__comment-textarea'
					placeholder='Komentarz'
					onChange={(e) => setComment(e.target.value)}
					value={comment}></textarea>
				<button type='submit' className='comments-form__button-submit'>
					Zatwierdź
				</button>
				<button type='button' className='comments-form__button-cancel'>
					Anuluj
				</button>
			</form>
		</section>
	);
};

export default CommentsForm;
