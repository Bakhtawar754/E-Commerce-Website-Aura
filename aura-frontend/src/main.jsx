import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Required import
import { StrictMode } from 'react';             // ✅ Required import
import App from './App.jsx';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

