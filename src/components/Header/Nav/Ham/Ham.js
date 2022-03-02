import './Ham.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHam } from '../../../../actions/navigation';

const Ham = () => {
	const state = useSelector((state) => state.navigationReducer);
	const dispatch = useDispatch();

	const hamClass = state.isHamActive ? 'ham__item--active' : '';
	return (
		<div className='ham' onClick={() => dispatch(toggleHam())}>
			<div className={`ham__item ${hamClass}`}></div>
			<div className={`ham__item ${hamClass}`}></div>
			<div className={`ham__item ${hamClass}`}></div>
		</div>
	);
};

export default Ham;
