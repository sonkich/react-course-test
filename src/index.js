import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './store/reducer';


const rootStore = createStore(rootReducer);

ReactDOM.render(<Provider store={rootStore}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
