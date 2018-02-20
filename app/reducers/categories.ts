const initialState = [{
    id: '0',
    title: 'Monthly Bills'
}, {
    id: '1',
    title: 'Everyday Expenses'
}, {
    id: '2',
    title: 'Rainy Day Funds'
}, {
    id: '3',
    title: 'Savings Goals'
}];

export default (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}
