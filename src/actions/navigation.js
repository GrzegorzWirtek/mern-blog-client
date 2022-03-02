import { TOGGLE_HAM, TOGGLE_IS_DEKSTOP } from '../constans/actionTypes';

export const toggleHam = () => {
	return { type: TOGGLE_HAM };
};

export const toggleIsDesktop = (value) => {
	return { type: TOGGLE_IS_DEKSTOP, payload: value };
};
