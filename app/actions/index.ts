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
