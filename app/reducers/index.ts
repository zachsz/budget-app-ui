import { combineReducers } from 'redux';
import budget from './budget';
import categories from './categories';
import subCategories from './subCategories';
import transactions from './transactions';
import accounts from './accounts';
import navigationState from './navigationState';

export default combineReducers({
    budget,
    categories,
    subCategories,
    transactions,
    accounts,
    navigationState
});
