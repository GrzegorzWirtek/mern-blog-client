import './DeleteArticle.css';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DeleteArticleItem from './DeleteArticleItem/DeleteArticleItem';
import DeletePopUp from './DeletePopUp/DeletePopUp';
import { deleteArticle } from '../../actions/articles';

const DeleteArticle = () => {
	const state = useSelector((state) => state.articlesReducer);
	const dispatch = useDispatch();

	const [isPopupActive, setIsPopupActive] = useState(false);
	const [selectedId, setSelectedId] = useState(null);

	const handleDeleteButton = (_id, title) => {
		setSelectedId(_id);
		setIsPopupActive(title);
	};

	const handleCancel = () => {
		setIsPopupActive(false);
		setSelectedId(null);
	};

	const handleDeleteArticle = () => {
		dispatch(deleteArticle(selectedId));
		setIsPopupActive(false);
		setSelectedId(null);
	};

	const articles = state.map((article) => {
		return (
			<DeleteArticleItem
				key={article._id}
				data={article}
				buttonClick={handleDeleteButton}
			/>
		);
	});

	return (
		<section className='delete-article'>
			{isPopupActive && (
				<DeletePopUp
					title={isPopupActive}
					deleteArticle={handleDeleteArticle}
					cancelDelete={handleCancel}
				/>
			)}
			<p className='delete-article__header'>Usuwanie posta</p>
			{articles}
		</section>
	);
};

export default DeleteArticle;
