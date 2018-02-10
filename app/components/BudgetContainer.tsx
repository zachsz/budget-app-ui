import { connect } from 'react-redux';
import BudgetTable from './BudgetTable';
import { updateCategoryBudget, finishEditing} from '../actions';

const mapStateToProps = (state:any) => {
    return state;
}

const mapDispatchToProps = (dispatch: any) => {
    return ({
        updateBudget: (catId: number, value: string) => {dispatch(updateCategoryBudget(catId, value))},
        finishEditing: (catId: number, value: string) => {dispatch(finishEditing(catId, value))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetTable);
