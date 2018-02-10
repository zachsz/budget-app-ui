const initialState = [{
    id: 0,
    accountId: '0',
    subCategoryId: 0,
    amount: -716.50
}, {
    id: 1,
    accountId: '1',
    subCategoryId: 7,
    amount: -9.99
}, {
    id: 2,
    accountId: '1',
    subCategoryId: 8,
    amount: -9.99
}]

export default (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}
