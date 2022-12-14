import React from 'react';
import Mapex from './mapex.js';
import ErrorBoundary from './ErrorBoundary.js';
import useFetch from './customhook.js';
import './style.css';

export default function App() {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
      <ErrorBoundary>
        <Mapex customprop="testing from parent" />
      </ErrorBoundary>
    </div>
  );
}
