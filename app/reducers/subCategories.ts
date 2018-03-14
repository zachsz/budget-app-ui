import * as moment from 'moment';

export default (state: any = [], action: any) => {
    switch (action.type) {
        case 'RECEIVE_BUDGET':
            return [...state, ...action.subCategories];
        case 'UPDATE_SUB_CATEGORY_BUDGET':
            return state.map((subCategory: any) => {
                if (subCategory.id === action.subCategoryId) {
                    subCategory.editing = true;
                    subCategory.tempBudgeted = action.value;
                }
                return subCategory;
            });
        case 'FINISH_EDITING_SUB_CATEGORY_BUDGET':
            return state.map((subCategory: any) => {
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