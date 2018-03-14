import * as React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
// import BudgetContainer from './BudgetContainer';
import BudgetTable from './BudgetTable';
import AccountContainer from './AccountContainer';
require('bootstrap/dist/css/bootstrap.min.css');
require('./dashboard.css');

const App = (props: any) => {
    let currentContainer;
    switch (props.navigationState.navigation) {
        case 'budget':
            currentContainer = <BudgetTable />;
            break;
        case 'account':
            currentContainer = <AccountContainer />;
            break;
        default:
            currentContainer = <div>Nothing to see here</div>;
            break;
    }
    return (
        <div>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <a href="#" className="navbar-brand col-sm-3 col-md-2 mr-0">Budget This!</a>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a href="#" className="nav-link">Sign out</a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <Navigation />
                    <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        {currentContainer}
                    </main>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return state;
}

export default connect(
    mapStateToProps
)(App);
