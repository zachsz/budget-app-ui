import { combineReducers } from 'redux';
import budget from './budget';
import categories from './categories';
import subCategories from './subCategories';
import transactions from './transactions';
import accounts from './accounts';
import navigationState from './navigationState';
import accountState from './accountState';
import transactionState from './transactionState';

export default combineReducers({
    budget,
    categories,
    subCategories,
    transactions,
    accounts,
    navigationState,
    accountState,
    transactionState
});
