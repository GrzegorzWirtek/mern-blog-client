import Button from '../../../components/Button/Button';
import './DeletePopUp.css';

const DeletePopUp = ({ title, deleteArticle, cancelDelete }) => {
	return (
		<div className='delete-popup'>
			<div className='delete-popup__wrapper'>
				<p className='delete-popup__header'>
					Czy na pewno chcesz usunąć artykuł
					<span className='delete-popup__title'>{` "${title}"`}</span>?
				</p>
				<Button
					text='Usuń'
					click={deleteArticle}
					subClass='delete-popup__button delete-popup__button--delete'
				/>
				<Button
					text='Anuluj'
					subClass='delete-popup__button'
					click={cancelDelete}
				/>
			</div>
		</div>
	);
};

export default DeletePopUp;
