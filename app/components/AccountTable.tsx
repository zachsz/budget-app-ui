import * as React from 'react';
import { connect } from 'react-redux';
import categories from '../reducers/categories';

const AccountTable = (props: any) => {
    const transactions = props.transactions.filter((transaction: any) => {
        return transaction.accountId === props.navigationState.account;
    }).map((transaction: any) => {
        const category = props.subCategories.filter((subCategory: any) => {
            return subCategory.id === transaction.subCategoryId;
        })[0].title;
        let inflow = 0, outflow = 0;
        if (transaction.amount < 0) {
            outflow = Math.abs(transaction.amount);
        } else {
            inflow = Math.abs(transaction.amount);
        }
        return (
            <tr key={`trans${transaction.id}`}>
                <td></td>
                <td></td>
                <td>{category}</td>
                <td>{`£${outflow.toFixed(2)}`}</td>
                <td>{`£${inflow.toFixed(2)}`}</td>
            </tr>
        )
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Payee</th>
                    <th>Category</th>
                    <th>Outflow</th>
                    <th>Inflow</th>
                </tr>
            </thead>
            <tbody>
                {transactions}
            </tbody>
        </table>
    )
};

const mapStateToProps = (state: any) => {
    return state;
}

export default connect(
    mapStateToProps
)(AccountTable);
