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

export const toggleAddTransaction = () => {
    return {
        type: 'TOGGLE_ADD_TRANSACTION'
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

export const updateTransactionCategory = (category: string) => {
    return {
        type: 'UPDATE_TRANSACTION_CATEGORY',
        category
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

export const addTransaction = (transaction: { accountId: string, subCategoryId: string, amount: number }) => {
    return {
        type: 'ADD_TRANSACTION',
        transaction
    }
}

const receiveBudget = (month: string, data: any) => {
    return {
        type: 'RECEIVE_BUDGET',
        masterCategories: data.masterCategories,
        subCategories: data.subCategories
    }
};

const dummyCategories = () => {
    return {
        type: 'RECEIVE_BUDGET',
        masterCategories: [{
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
        }],
        subCategories: [{
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
        }]
    };
}

export const fetchBudget = (month: string) => (dispatch: any) => {
    // dispatch()
    // setTimeout(() => {
    //     dispatch(dummyCategories());
    // }, 500);
    return fetch(`http://localhost:3000/budget/${month}`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log('got response', json);
            return dispatch(receiveBudget(month, json));
        });
};

export const openMasterCategoryModal = () => {
    return {
        type: 'SHOW_MASTER_CATEGORY_MODAL'
    }
};

export const hideMasterCategoryModal = () => {
    return {
        type: 'HIDE_MASTER_CATEGORY_MODAL'
    };
};

export const addMasterCategory = (title: string) => (dispatch: any) => {
    return fetch(`http://localhost:3000/master-categories`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'foo'
        })
    })
        .then(() => {
            return dispatch(hideMasterCategoryModal());
        });
};
