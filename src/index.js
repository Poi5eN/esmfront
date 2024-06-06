import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);