import * as React from 'react';
import CategoryRow from './CategoryRow';
import { CategoryRowProps } from './CategoryRow';
import SubCategoryRow from './SubCategoryRow';
import { getPrefix } from '../utils/utils';
require('./BudgetTable.css');

export interface BudgetTableProps {
    categories?: [any];
    subCategories?: [any];
    transactions?: [any];
    budget?: any;
    // month?: string;
    // totals?: {
    //     budgeted: string;
    //     outflows: string;
    //     balance: string;
    // }
    // categories?: [CategoryRowProps],
    updateBudget?: any;
    finishEditing?: any;
}

export default (props: BudgetTableProps) => {
    let categories: any[] = [];
    props.categories.forEach((category) => {
        const subCategories = props.subCategories.filter((subCategory: any) => {
            return subCategory.categoryId === category.id;
        });

        categories.push(
            <CategoryRow
                {...category}
                transactions={subCategories.reduce((accumulator: [any], subCategory) => {
                    return accumulator.concat(props.transactions.filter((transaction) => {
                        return transaction.subCategoryId === subCategory.id;
                    }))
                }, [])}
                budgets={subCategories.map((subCategory) => {
                    return subCategory.budgeted;
                })}
                key={'cat' + category.id}
            />
        )

        categories = categories.concat(subCategories.map((subCategory: any) => {
            return <SubCategoryRow
                {...subCategory}
                transactions={props.transactions.filter((trans) => (trans.subCategoryId === subCategory.id))}
                updateBudget={props.updateBudget}
                finishEditing={props.finishEditing}
                key={'subCat' + subCategory.id}
            />
        }));
    });
    const budgeted = props.subCategories.reduce((accumulator: number, subCategory) => {
        return accumulator + subCategory.budgeted;
    }, 0);
    const outflows = props.transactions.reduce((accumulator: number, transaction) => {
        return accumulator + transaction.amount;
    }, 0);
    const balance = budgeted + outflows;
    return (
        <div className="budget-table">
            <table >
                <thead>
                    <tr>
                        <th />
                        <th colSpan={3}>
                            {props.budget.month}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Categories +
                    </th>
                        <th>
                            Budgeted {`${getPrefix(budgeted)}${Math.abs(budgeted).toFixed(2)}`}
                        </th>
                        <th>
                            Outflows {`${getPrefix(budgeted)}${Math.abs(outflows).toFixed(2)}`}
                        </th>
                        <th>
                            Balance {`${getPrefix(budgeted)}${Math.abs(balance).toFixed(2)}`}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categories}
                </tbody>
            </table>
        </div>
    )
}
