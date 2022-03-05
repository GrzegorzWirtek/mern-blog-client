import './Comments.css';
import CommentsForm from './CommentsForm/CommentsForm';

const Comments = ({ id, comments }) => {
	const commentsComponent = comments.map((comment, index) => (
		<div key={index} className='comment'>
			<p className='comment__name'>{comment.name}</p>
			<p className='commenta__date'>{comment.date}</p>
			<p className='comment__text'>{comment.comment}</p>
		</div>
	));

	return (
		<section className='comments'>
			<p className='comments__title'>Komentarze (0)</p>
			{commentsComponent}
			<CommentsForm id={id} />
		</section>
	);
};

export default Comments;
