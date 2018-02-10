export const updateCategoryBudget = (subCatId: number, value: string) => {
    return {
        type: 'UPDATE_SUB_CATEGORY_BUDGET',
        subCategoryId: subCatId,
        value
    }
}

export const finishEditing = (subCatId: number, value: string) => {
    return {
        type: 'FINISH_EDITING_SUB_CATEGORY_BUDGET',
        subCategoryId: subCatId,
        value
    }
}

export const selectNavigation = (navigationKey: string) => {
    return {
        type: 'SELECT_NAVIGATION',
        navigationKey
    };
};

export const selectAccount = (accountId: string) => {
    return {
        type: 'SELECT_ACCOUNT',
        accountId
    }
}
