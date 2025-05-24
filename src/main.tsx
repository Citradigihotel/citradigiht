import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// Use hydrate if the app was prerendered, otherwise use render
const rootElement = document.getElementById('root')!;
const renderMethod = rootElement.hasChildNodes() ? ReactDOM.hydrateRoot : ReactDOM.createRoot;

renderMethod(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);