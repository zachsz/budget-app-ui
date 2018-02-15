import * as React from 'react';
import { connect } from 'react-redux';
import AccountTable from './AccountTable';
import AccountContainerFooter from './AccountContainerFooter';

const AccountContainer = (props: any) => (
    <div>
        <div>This is where the search and filtering will go...</div>
        <AccountTable {...props}/>
        <AccountContainerFooter />
    </div>
);

const mapStateToProps = (state: any) => {
    return state;
}

export default connect(
    mapStateToProps
)(AccountContainer);