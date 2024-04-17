import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'; 
import { Provider } from 'react-redux';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


if (root !== null && root instanceof HTMLElement) {
  const rootInstance = ReactDOM.createRoot(root);
  rootInstance.render(app);
  
  reportWebVitals(console.log);
}
