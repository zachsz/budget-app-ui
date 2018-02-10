import * as React from 'react';

export interface SubCategoryRowProps {
    id: number,
    title: string;
    budgeted: number;
    tempBudgeted: string;
    editing: boolean;
    updateBudget?: any;
    finishEditing?: any;
    transactions?: [any];
}

class SubCategoryRow extends React.Component<SubCategoryRowProps> {
    constructor(props: SubCategoryRowProps) {
        super(props);

        this._handleChange = this._handleChange.bind(this);
        this._handleBlur = this._handleBlur.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    private _handleChange(e: React.ChangeEvent<any>) {
        this.props.updateBudget(this.props.id, e.target.value);
    }

    private _handleBlur(e: any) {
        this.props.finishEditing(this.props.id, e.target.value);
    }

    private _handleKeyPress(e: React.KeyboardEvent<any>) {
        if (e.key === 'Enter') {
            (this.refs['input'] as HTMLInputElement).blur();
        }
    }

    render() {
        const totalOutflows: number = this.props.transactions.reduce((accumulator: number, transaction: any) => {
            return accumulator + transaction.amount;
        }, 0);
        const balance: number = this.props.budgeted + totalOutflows;
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>
                    <input
                        ref='input'
                        type="number"
                        value={this.props.editing ? this.props.tempBudgeted : this.props.budgeted.toFixed(2)}
                        onChange={this._handleChange}
                        onBlur={this._handleBlur}
                        onKeyPress={this._handleKeyPress}
                    />
                </td>
                <td>{totalOutflows.toFixed(2)}</td>
                <td>{balance.toFixed(2)}</td>
            </tr>
        )
    }
}

export default SubCategoryRow