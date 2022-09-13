import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BlogContextProvider } from './contexts/blogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </React.StrictMode>
);
