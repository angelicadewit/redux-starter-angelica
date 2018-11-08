import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router-dom';



const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Route path='/' component={product}/>
      <Route path='/cart' component={cart}/>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
