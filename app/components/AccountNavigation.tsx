import * as React from 'react';
import { connect } from 'react-redux';
import { selectNavigation, selectAccount } from '../actions';

const AccountNavigation = (props: any) => {
    const accounts = props.accounts.map((account: any) => {
        return (
            <li className='nav-item' key={`acc${account.id}`} onClick={() => {props.selectAccount(account.id)}}>
                {account.name}
            </li>
        );
    })
    return (
        <ul>
            {accounts}
        </ul>
    );
}

const mapStateToProps = (state: any) => {
    return state
};

const mapDispatchToProps = (dispatch: any) => {
    return ({
        selectAccount: (accountId: string) => {
            dispatch(selectNavigation('account'))
            dispatch(selectAccount(accountId));
        }
    });
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(AccountNavigation);
