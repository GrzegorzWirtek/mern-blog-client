import './DeleteArticleItem.css';

import Button from '../../../components/Button/Button';

const DeleteArticleItem = ({ data, buttonClick }) => {
	return (
		<article key={data._id} className='delete-article__item'>
			<div className='delete-article__button-wrapper'>
				<Button
					text='Usuń'
					click={() => buttonClick(data._id, data.title)}
					subClass='delete-article__button'
				/>
			</div>
			<img
				className='delete-article__img'
				src={`images/${data.imgNames[0].imgName}-min.png`}
				alt={data.imgDescription}
			/>
			<p className='delete-article__date'>{data.date}</p>
			<p className='delete-article__title'>{data.title}</p>
		</article>
	);
};

export default DeleteArticleItem;
