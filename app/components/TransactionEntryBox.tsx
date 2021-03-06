import * as React from 'react';

export default (props: any) => {
    const options: any[] = [
        <option key='empty' value='' />
    ];
    props.categories.forEach((category: any) => {
        options.push(
            <option key={`cat${category.id}`} value={`cat${category.id}`} disabled={true}>{category.title}</option>
        );

        props.subCategories.forEach((subCat: any) => {
            if (subCat.categoryId === category.id) {
                options.push(
                    <option key={`subCat${subCat.id}`} value={subCat.id}>{subCat.title}</option>
                );
            }
        });
    });

    return (
        <div>
            <div>
                <input className='form-control' type='date' value={props.transactionState.date} onChange={props.handleDateChange} />
                <input className='form-control' type='text' value={props.transactionState.payee} onChange={props.handlePayeeChange} />
                <select name='category' value={props.transactionState.category} onChange={props.handleCategoryChange}>
                    {options}
                </select>
                <input className='form-control' type='number' value={props.transactionState.outflow} onChange={props.handleOutflowChange} />
                <input className='form-control' type='number' value={props.transactionState.inflow} onChange={props.handleInflowChange} />
            </div>
            <div>
                <button
                    onClick={() => {
                        const outflow = parseFloat(props.transactionState.outflow);
                        const inflow = parseFloat(props.transactionState.inflow);
                        props.addTransaction({
                            accountId: props.navigationState.account,
                            subCategoryId: props.transactionState.category,
                            amount: outflow !== 0 ? -outflow : inflow
                        })
                    }}
                >
                    Save and add another
                </button>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    );
}
