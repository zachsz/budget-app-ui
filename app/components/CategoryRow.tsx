import * as React from 'react';
import { SubCategoryRowProps } from './SubCategoryRow';
import { getPrefix } from '../utils/utils';
require('./CategoryRow.css');

export interface CategoryRowProps {
    title: string;
    transactions: [any];
    budgets: [any];
}

export default (props: CategoryRowProps) => {
    const outflows: number = props.transactions.reduce((accumulator: number, transaction) => {
        return accumulator + transaction.amount;
    }, 0);
    const budgeted: number = props.budgets.reduce((accumulator: number, budget: number) => {
        return accumulator + budget;
    }, 0);
    const total = budgeted + outflows;
    return (
        <tr className="category-row">
            <td>{props.title}</td>
            <td>{`${getPrefix(budgeted)}${Math.abs(budgeted).toFixed(2)}`}</td>
            <td>{`${getPrefix(outflows)}${Math.abs(outflows).toFixed(2)}`}</td>
            <td>{`${getPrefix(total)}${Math.abs(total).toFixed(2)}`}</td>
        </tr>
    );
}