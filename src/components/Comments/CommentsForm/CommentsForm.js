import './CommentsForm.css';

import Button from '../../Button/Button';

import { addComment } from '../../../actions/articles';
import { toggleCommentsForm } from '../../../actions/navigation';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CommentsForm = ({ id }) => {
	const [name, setName] = useState('');
	const [comment, setComment] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.length < 1 || comment.length < 1) return;
		const newDate = new Date();
		const date = newDate.toLocaleString().replaceAll('.', '/');
		dispatch(addComment({ id, name, comment, date }));
		dispatch(toggleCommentsForm());
		setName('');
		setComment('');
	};

	const handleCancel = () => {
		setName('');
		setComment('');
		dispatch(toggleCommentsForm());
	};

	return (
		<form className='comments-form' onSubmit={handleSubmit}>
			<p className='comments-form__title'>Dodaj swój komentarz</p>
			<input
				type='text'
				maxLength='30'
				className='comments-form__name-input'
				placeholder='Imię lub pseudonim'
				onChange={(e) => setName(e.target.value)}
				value={name}
				required
			/>
			<textarea
				cols='30'
				rows='7'
				maxLength='300'
				className='comments-form__comment-textarea'
				placeholder='Komentarz'
				onChange={(e) => setComment(e.target.value)}
				value={comment}
				required></textarea>
			<section className='comments-form__buttons'>
				<Button type='submit' text='Zatwierdź' subClass='comments__button' />
				<Button
					type='button'
					text='Anuluj'
					click={handleCancel}
					subClass='comments__button comments__button--cancel'
				/>
			</section>
		</form>
	);
};

export default CommentsForm;
