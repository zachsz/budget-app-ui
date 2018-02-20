import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import budgetApp from './reducers';

const store = createStore(
    budgetApp,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);