const initialState = [{
    id: '0',
    name: 'Current Account'
}, {
    id: '1',
    name: 'Amex'
}];

export default (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};
