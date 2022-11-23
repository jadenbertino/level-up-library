import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
