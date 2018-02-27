import * as React from 'react';
import { connect } from 'react-redux';
import { selectNavigation } from '../actions';

const MainNavigation = (props: any) => {
    return (
        <ul className="nav flex-column">
            <li className='nav-item' onClick={() => {props.selectNavigation('budget')}}><a href="#" className="nav-link">Budget</a></li>
            <li className='nav-item' onClick={() => {props.selectNavigation('reports')}}><a href="#" className="nav-link">Reports</a></li>
            <li className='nav-item' onClick={() => {props.selectNavigation('all-accounts')}}><a href="#" className="nav-link">All Accounts</a></li>
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
