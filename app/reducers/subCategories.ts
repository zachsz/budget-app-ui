const initialState = [{
    id: '0',
    categoryId: '0',
    title: 'Rent/Mortgage',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '1',
    categoryId: '0',
    title: 'Phone',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '2',
    categoryId: '0',
    title: 'Road Tax',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '3',
    categoryId: '0',
    title: 'Council Tax',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '4',
    categoryId: '0',
    title: 'Natural Gas/Propane/Oil',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '5',
    categoryId: '0',
    title: 'Electricity',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '6',
    categoryId: '0',
    title: 'Water',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '7',
    categoryId: '0',
    title: 'Netflix',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '8',
    categoryId: '0',
    title: 'Spotify',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '9',
    categoryId: '0',
    title: 'Internet',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '10',
    categoryId: '0',
    title: 'Sky TV',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}, {
    id: '11',
    categoryId: '0',
    title: 'TV Licence',
    budgeted: 0,
    editing: false,
    tempBudgeted: ''
}];

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'UPDATE_SUB_CATEGORY_BUDGET':
            return state.map((subCategory) => {
                if (subCategory.id === action.subCategoryId) {
                    subCategory.editing = true;
                    subCategory.tempBudgeted = action.value;
                }
                return subCategory;
            });
        case 'FINISH_EDITING_SUB_CATEGORY_BUDGET':
            return state.map((subCategory) => {
                if (subCategory.id === action.subCategoryId) {
                    subCategory.editing = false;
                    subCategory.tempBudgeted = '';
                    subCategory.budgeted = parseFloat(action.value);
                }
                return subCategory;
            })
        default:
            return state;
    }
}