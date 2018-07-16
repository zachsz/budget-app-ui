const initialState = {
    navigation: 'budget',
    account: '0',
    showMasterCategoryModal: false
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'SELECT_NAVIGATION':
            return {
                ...state,
                navigation: action.navigationKey
            };
        case 'SELECT_ACCOUNT':
            return {
                ...state,
                account: action.accountId
            };
        case 'SHOW_MASTER_CATEGORY_MODAL':
            return {
                ...state,
                showMasterCategoryModal: true
            };
        case 'HIDE_MASTER_CATEGORY_MODAL':
            return {
                ...state,
                showMasterCategoryModal: false
            };
        default:
            return state;
    }
};
