import { CHANGE_TAB } from '../constants/constants';

export const changeTab = (payload) => {
    return {
        type: CHANGE_TAB,
        payload
    };
};