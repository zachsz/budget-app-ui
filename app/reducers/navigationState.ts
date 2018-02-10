const initialState = {
    navigation: 'budget',
    account: ''
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
            }
        default:
            return state;
    }
};