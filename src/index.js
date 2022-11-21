import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import 'css/index.css';
import App from './App.jsx';

// const container = document.getElementById('root');
// const root = createRoot(container);
// console.log(root);
// root.render(
//   <React>
//     <App />
//   </React>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
