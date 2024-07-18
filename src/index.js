import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import CapturedEmotionsPage from './pages/CapturedEmotionsPage';
import SpeedTrackPage from './pages/SpeedTrackPage';
import HomePage from './pages/HomePage'
import Layout from './pages/Layout';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
