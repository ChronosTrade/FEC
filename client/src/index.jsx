import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './components/App';
import ErrorPage from './errorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

const appRoot = ReactDOM.createRoot(root);
appRoot.render(<RouterProvider router={router} />);
