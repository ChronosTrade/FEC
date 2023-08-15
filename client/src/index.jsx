import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './assets/base.css';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

const appRoot = ReactDOM.createRoot(root);
appRoot.render(<App />);
