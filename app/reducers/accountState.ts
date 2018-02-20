const initialState = {
    addingTransaction: false
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'TOGGLE_ADD_TRANSACTION':
            return {
                ...state,
                addingTransaction: true
            };
        default:
            return state;
    }
}