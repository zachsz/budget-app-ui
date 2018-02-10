import * as React from 'react';
import { connect } from 'react-redux';
import { selectNavigation } from '../actions';

const MainNavigation = (props: any) => {
    return (
        <ul>
            <li onClick={() => {props.selectNavigation('budget')}}>Budget</li>
            <li onClick={() => {props.selectNavigation('reports')}}>Reports</li>
            <li onClick={() => {props.selectNavigation('all-accounts')}}>All Accounts</li>
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
