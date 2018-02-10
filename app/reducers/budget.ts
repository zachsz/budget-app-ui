const singleMonthData = {
    month: 'Jan 2018',
    totals: {
        budgeted: '£100',
        outflows: '£70',
        balance: '£30'
    },
    categories: [{
        id: 0,
        name: 'monthly bills',
        totals: {
            budgeted: '£200',
            outflows: '£50',
            balance: '£150'
        },
        subcategories: [{
            id: 0,            
            parentCategory: 0,
            name: 'rent',
            budgeted: '£100',
            outflows: '£25',
            balance: '£75'
        }, {
            id: 1,
            parentCategory: 0,            
            name: 'phone',
            budgeted: '£100',
            outflows: '£25',
            balance: '£75'
        }],
    }, {
        id: 1,        
        name: 'everyday expenses',
        totals: {
            budgeted: '£200',
            outflows: '£50',
            balance: '£150'
        },
        subcategories: [{
            id: 0,
            parentCategory: 1,            
            name: 'rent',
            budgeted: '£100',
            outflows: '£25',
            balance: '£75'
        }, {
            id: 1,            
            parentCategory: 1,            
            name: 'phone',
            budgeted: '£100',
            outflows: '£25',
            balance: '£75'
        }]
    }]
}

export default (state = singleMonthData, action: any) => {
    switch (action.type) {
        case 'UPDATE_CATEGORY_BUDGET':
        const categories = state.categories.slice();
            for (let i = 0; i < categories.length; i++) {
                const category = categories[i];
                if (category.id === action.parentCategory) {
                    for (let j = 0; j < category.subcategories.length; j++) {
                        const subCategory = category.subcategories[j];
                        if (subCategory.id === action.category) {
                            subCategory.budgeted = action.value;
                            return {
                                ...state,
                                categories
                            };
                        }
                    }
                }
            }
        default:
            return state;
    }
}