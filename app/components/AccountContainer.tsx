import * as React from 'react';
import { connect } from 'react-redux';
import { addTransaction, toggleAddTransaction, updateTransactionDate, updateTransactionPayee, updateTransactionCategory, updateTransactionOutflow, updateTransactionInflow } from '../actions';
import AccountTable from './AccountTable';
import AccountContainerFooter from './AccountContainerFooter';

const AccountContainer = (props: any) => (
    <div>
        <div>This is where the search and filtering will go...</div>
        <AccountTable {...props}/>
        <AccountContainerFooter {...props}/>
    </div>
);

const mapStateToProps = (state: any) => {
    return state;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        toggleAddTransaction: () => { dispatch(toggleAddTransaction()) },
        handleDateChange: (e: React.ChangeEvent<any>) => {
            dispatch(updateTransactionDate(e.target.value));
        },
        handlePayeeChange: (e: React.ChangeEvent<any>) => {
            dispatch(updateTransactionPayee(e.target.value));
        },
        handleCategoryChange: (e: React.ChangeEvent<any>) => {
            dispatch(updateTransactionCategory(e.target.value));
        },
        handleOutflowChange: (e: React.ChangeEvent<any>) => {
            dispatch(updateTransactionOutflow(e.target.value));
        },
        handleInflowChange: (e: React.ChangeEvent<any>) => {
            dispatch(updateTransactionInflow(e.target.value));
        },
        addTransaction: (transaction: {accountId: string, subCategoryId: string, amount: number}) => {
            dispatch(addTransaction(transaction));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountContainer);