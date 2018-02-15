import * as React from 'react';
import { connect } from 'react-redux';
import { selectNavigation } from '../actions';

const MainNavigation = (props: any) => {
    return (
        <ul>
            <li className='nav-item' onClick={() => {props.selectNavigation('budget')}}>Budget</li>
            <li className='nav-item' onClick={() => {props.selectNavigation('reports')}}>Reports</li>
            <li className='nav-item' onClick={() => {props.selectNavigation('all-accounts')}}>All Accounts</li>
        </ul>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return ({
        selectNavigation: (navigationKey: string) => {dispatch(selectNavigation(navigationKey))}
    });
}

export default connect(
    null,
    mapDispatchToProps
)(MainNavigation);
