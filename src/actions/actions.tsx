export const SAVE_PRODUCTS   = 'SAVE_PRODUCTS';
export const SAVE_FILTER_CATEGORY   = 'SAVE_FILTER_CATEGORY';
export const SAVE_MAIN_PAGE_CATEGORY   = 'SAVE_MAIN_PAGE_CATEGORY';

export const SaveProducts = products => ({
    type: SAVE_PRODUCTS,
    payload: products
});

export const SaveFilterCategory = filterCategory => ({
    type: SAVE_FILTER_CATEGORY,
    payload: filterCategory
});

export const SaveMainPageCategory = mainPageCategory => ({
    type: SAVE_MAIN_PAGE_CATEGORY,
    payload: mainPageCategory
});
