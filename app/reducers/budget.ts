import * as moment from 'moment';

const currentMonth = moment().format('MMMM YYYY');

const singleMonthData = {
    month: currentMonth
}

export default (state = singleMonthData, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}