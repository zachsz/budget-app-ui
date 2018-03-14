export default (state: any = [], action: any) => {
    switch (action.type) {
        case 'RECEIVE_BUDGET':
            return [...state, ...action.masterCategories];
        default:
            return state;
    }
}
