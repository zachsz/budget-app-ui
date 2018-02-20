import * as moment from 'moment'

const initialState = {
    date: moment().format('YYYY-MM-DD'),
    payee: '',
    category: '',
    outflow: 0,
    inflow: 0
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'UPDATE_TRANSACTION_DATE':
            return {
                ...state,
                date: action.date
            };
        case 'UPDATE_TRANSACTION_PAYEE':
            return {
                ...state,
                payee: action.payee
            };
        case 'UPDATE_TRANSACTION_CATEGORY':
            return {
                ...state,
                category: action.category
            }
        case 'UPDATE_TRANSACTION_OUTFLOW':
            return {
                ...state,
                outflow: action.outflow
            }
        case 'UPDATE_TRANSACTION_INFLOW':
            return {
                ...state,
                inflow: action.inflow
            }
        default:
            return state;
    }
};
