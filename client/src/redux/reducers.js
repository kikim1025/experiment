import { TAB_MAIN, CHANGE_TAB } from '../constants/constants';

const initState = { currTab: TAB_MAIN };

export default (state = initState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return Object.assign({}, state, { 
                currTab: action.payload
            });
        default: 
            return state;
    };
};