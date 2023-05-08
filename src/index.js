import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ModalContextProvider } from 'context/ModalContext.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>
);