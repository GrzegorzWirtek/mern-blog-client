import './Comments.css';
import CommentsForm from './CommentsForm/CommentsForm';
import Button from '../Button/Button';

import { toggleCommentsForm } from '../../actions/navigation';

import { useDispatch, useSelector } from 'react-redux';

const COMMENTS_BUTTON_TEXT = 'Skomentuj';

const Comments = ({ id, comments }) => {
	const dispatch = useDispatch();
	const isCommentsFormVisible = useSelector(
		(state) => state.navigationReducer.isCommentsFormVisible,
	);

	const commentsComponent = comments.map((comment, index) => (
		<div key={index} className='comment'>
			<p className='comment__name'>{comment.name}</p>
			<p className='comment__date'>{comment.date}</p>
			<p className='comment__text'>{comment.comment}</p>
		</div>
	));

	const handleAddComment = () => {
		dispatch(toggleCommentsForm());
	};

	const numberOfComments = comments.length;

	return (
		<section className='comments'>
			<p className='comments__title'>Komentarze ({numberOfComments})</p>
			<Button
				click={handleAddComment}
				text={COMMENTS_BUTTON_TEXT}
				subClass='add-comment-buton'
			/>
			{commentsComponent}
			{isCommentsFormVisible && <CommentsForm id={id} />}
		</section>
	);
};

export default Comments;
