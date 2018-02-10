import * as React from 'react';
import Navigation from './Navigation';
import BudgetContainer from './BudgetContainer';
require('./App.css');

export default () => (
    <div className="row">
        <Navigation />
        <div className="column right">
            <BudgetContainer />
        </div>
    </div>
)