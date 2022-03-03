import { useNavigate } from 'react-router-dom';
import './ArticleMin.css';

const ArticleMin = ({ data }) => {
	const navigate = useNavigate();
	const { _id, imgName, date, title } = data;

	return (
		<article
			className='article-min'
			data-id={_id}
			onClick={() => navigate(`../article/${_id}`)}>
			<div className='article-min__img-wrapper'>
				<img
					className='article-min__img'
					src={`/images/${imgName}-min.png`}
					alt=''
				/>
			</div>
			<p className='article-min__date'>{date}</p>
			<h3 className='article-min__title'>{title}</h3>
		</article>
	);
};

export default ArticleMin;
