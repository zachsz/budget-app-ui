import * as React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import BudgetContainer from './BudgetContainer';
import AccountContainer from './AccountContainer';
require('./App.css');

const App = (props: any) => {
    let currentContainer;
    switch (props.navigationState.navigation) {
        case 'budget':
            currentContainer = <BudgetContainer />;
            break;
        case 'account':
            currentContainer = <AccountContainer />;
            break;
        default:
            currentContainer = <div>Nothing to see here</div>;
            break;
    }
    return (
        <div className="row">
            <Navigation />
            <div className="column right">
                {currentContainer}
            </div>
        </div>
);}

const mapStateToProps = (state: any) => {
    return state;
}

export default connect(
    mapStateToProps
)(App);
