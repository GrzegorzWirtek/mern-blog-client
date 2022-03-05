import {
	TOGGLE_HAM,
	TOGGLE_IS_DEKSTOP,
	SET_FOUND_ARTICLES,
} from '../constans/actionTypes';

const initialNavigationState = {
	isHamActive: false,
	isDesktop: true,
	foundArticles: [],
};

const navigationReducer = (state = initialNavigationState, action) => {
	switch (action.type) {
		case TOGGLE_HAM:
			return { ...state, isHamActive: !state.isHamActive };
		case TOGGLE_IS_DEKSTOP:
			return { ...state, isDesktop: action.payload };
		case SET_FOUND_ARTICLES:
			return { ...state, foundArticles: action.payload };
		default:
			return state;
	}
};

export default navigationReducer;
