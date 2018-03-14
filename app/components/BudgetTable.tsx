import * as React from 'react';
import { connect } from 'react-redux';
import CategoryRow from './CategoryRow';
import { CategoryRowProps } from './CategoryRow';
import SubCategoryRow from './SubCategoryRow';
import { getPrefix } from '../utils/utils';
import { fetchBudget, updateCategoryBudget, finishEditing } from '../actions';

export interface BudgetTableProps {
    categories?: [any];
    subCategories?: [any];
    transactions?: [any];
    budget?: any;
    updateBudget?: any;
    finishEditing?: any;
    dispatch?: any;
}

class BudgetTable extends React.Component<BudgetTableProps> {
    constructor(props: BudgetTableProps) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchBudget(this.props.budget.month));
    }

    render() {
        let categories: any[] = [];
        this.props.categories.forEach((category) => {
            const subCategories = this.props.subCategories.filter((subCategory: any) => {
                return subCategory.categoryId === category.id;
            });

            categories.push(
                <CategoryRow
                    {...category}
                    transactions={subCategories.reduce((accumulator: [any], subCategory) => {
                        return accumulator.concat(this.props.transactions.filter((transaction) => {
                            return transaction.subCategoryId === subCategory.id;
                        }))
                    }, [])}
                    budgets={subCategories.map((subCategory) => {
                        return subCategory.budgeted;
                    })}
                    key={'cat' + category.id}
                />
            )

            categories = categories.concat(subCategories.map((subCategory: any) => {
                return <SubCategoryRow
                    {...subCategory}
                    transactions={this.props.transactions.filter((trans) => (trans.subCategoryId === subCategory.id))}
                    updateBudget={this.props.updateBudget}
                    finishEditing={this.props.finishEditing}
                    key={'subCat' + subCategory.id}
                />
            }));
        });
        const budgeted = this.props.subCategories.reduce((accumulator: number, subCategory) => {
            return accumulator + subCategory.budgeted;
        }, 0);
        const outflows = this.props.transactions.reduce((accumulator: number, transaction) => {
            return accumulator + transaction.amount;
        }, 0);
        const balance = budgeted + outflows;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th />
                        <th colSpan={3}>
                            {this.props.budget.month}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Categories +
                        </th>
                        <th>
                            Budgeted {`${getPrefix(budgeted)}${Math.abs(budgeted).toFixed(2)}`}
                        </th>
                        <th>
                            Outflows {`${getPrefix(budgeted)}${Math.abs(outflows).toFixed(2)}`}
                        </th>
                        <th>
                            Balance {`${getPrefix(budgeted)}${Math.abs(balance).toFixed(2)}`}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categories}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state: any) => {
    return state;
}

const mapDispatchToProps = (dispatch: any) => {
    return ({
        updateBudget: (catId: number, value: string) => {dispatch(updateCategoryBudget(catId, value))},
        finishEditing: (catId: number, value: string) => {dispatch(finishEditing(catId, value))},
        dispatch: dispatch
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BudgetTable);
