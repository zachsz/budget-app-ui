import * as React from 'react';
import MainNavigation from './MainNavigation';
import AccountNavigation from './AccountNavigation';

export default () => (
    <div className="column left">
        <MainNavigation />
        <AccountNavigation />
    </div>
);