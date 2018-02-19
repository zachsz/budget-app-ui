import * as React from 'react';
import AddTransaction from './AddTransaction';
import AccountSummary from './AccountSummary';
import TransactionEntryBox from './TransactionEntryBox';

export default (props: any) => {
    const transactionEntryBox = (
        <TransactionEntryBox
            {...props.transactionState}
            handleDateChange={props.handleDateChange}
            handlePayeeChange={props.handlePayeeChange}
            handleOutflowChange={props.handleOutflowChange}
            handleInflowChange={props.handleInflowChange}
        />
    );
    const addTransactionBox = (
        <AddTransaction {...props} />
    );
    return (
        <div>
            {props.accountState.addingTransaction ? transactionEntryBox : addTransactionBox}
            <AccountSummary />
        </div>
    );
}