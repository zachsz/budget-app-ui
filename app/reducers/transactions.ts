const initialState = [{
    id: 0,
    accountId: '0',
    subCategoryId: '0',
    amount: -716.50
}, {
    id: 1,
    accountId: '1',
    subCategoryId: '7',
    amount: -9.99
}, {
    id: 2,
    accountId: '1',
    subCategoryId: '8',
    amount: -9.99
}];
let currentId = initialState[initialState.length - 1].id;

export default (state: any = [], action: any) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [
                ...state,
                {
                    id: ++currentId,
                    accountId: action.transaction.accountId,
                    subCategoryId: action.transaction.subCategoryId,
                    amount: parseFloat(action.transaction.amount)
                }
            ]
        default:
            return state;
    }
}
