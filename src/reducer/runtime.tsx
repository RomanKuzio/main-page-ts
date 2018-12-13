import { SAVE_PRODUCTS,SAVE_FILTER_CATEGORY,SAVE_MAIN_PAGE_CATEGORY  } from '../actions/actions'

export function runtime(state = {}, action) {
    switch(action.type){
        case 'SAVE_PRODUCTS':
            return { ...state, products: action.payload };

        case 'SAVE_FILTER_CATEGORY':
            return { ...state, filterCategory: action.payload };

        case 'SAVE_MAIN_PAGE_CATEGORY':
            return { ...state, mainPageCategory: action.payload };

        default:
            return state;
    }
}
