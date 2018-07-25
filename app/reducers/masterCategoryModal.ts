const initialState = {
    show: false,
    masterCategoryName: ''
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'SHOW_MASTER_CATEGORY_MODAL':
            return {
                ...state,
                show: true
            };
        case 'HIDE_MASTER_CATEGORY_MODAL':
            return {
                ...state,
                show: false
            };
        case 'UPDATE_MODAL_MASTER_CATEGORY_NAME':
            return {
                ...state,
                masterCategoryName: action.masterCategoryName
            };
        default:
            return state;
    }
};
