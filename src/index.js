import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./components";
import { BrowserRouter, Routes } from 'react-router-dom';
import ErrorBoundary from './ss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />

);