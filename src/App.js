import React from 'react';
import Mapex from './mapex.js';
import ErrorBoundary from './ErrorBoundary.js';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ul>
        <li>hello</li>
      </ul>
      <ErrorBoundary>
        <Mapex customprop="testing from parent" />
      </ErrorBoundary>
    </div>
  );
}