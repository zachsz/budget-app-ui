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

export const addTransaction = () => {
    return {
        type: 'ADD_TRANSACTION'
    }
}

export const updateTransactionDate = (date: string) => {
    return {
        type: 'UPDATE_TRANSACTION_DATE',
        date
    }
}

export const updateTransactionPayee = (payee: string) => {
    return {
        type: 'UPDATE_TRANSACTION_PAYEE',
        payee
    }
}

export const updateTransactionOutflow = (outflow: number) => {
    return {
        type: 'UPDATE_TRANSACTION_OUTFLOW',
        outflow
    }
}

export const updateTransactionInflow = (inflow: number) => {
    return {
        type: 'UPDATE_TRANSACTION_INFLOW',
        inflow
    }
}