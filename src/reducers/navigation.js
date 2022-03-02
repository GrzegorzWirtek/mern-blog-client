import { TOGGLE_HAM, TOGGLE_IS_DEKSTOP } from '../constans/actionTypes';

const initialNavigationState = {
	isHamActive: false,
	isDesktop: true,
};

const navigationReducer = (state = initialNavigationState, action) => {
	switch (action.type) {
		case TOGGLE_HAM:
			return { ...state, isHamActive: !state.isHamActive };
		case TOGGLE_IS_DEKSTOP:
			return { ...state, isDesktop: action.payload };
		default:
			return state;
	}
};

export default navigationReducer;
