import { combineReducers } from 'redux';
import budget from './budget';
import categories from './categories';
import subCategories from './subCategories';
import transactions from './transactions';

export default combineReducers({
    budget,
    categories,
    subCategories,
    transactions
});
