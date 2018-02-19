import * as React from 'react';

export default (props: any) => {
    return (
        <div>
            <div>
                <input type='date' value={props.date} onChange={props.handleDateChange}/>
                <input type='text' value={props.payee} onChange={props.handlePayeeChange}/>
                <select name='category' />
                <input type='number' value={props.outflow} onChange={props.handleOutflowChange}/>
                <input type='number' value={props.inflow} onChange={props.handleInflowChange}/>
            </div>
            <div>
                <button>Save and add another</button>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    );
}
