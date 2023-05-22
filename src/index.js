import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// context
import { ModalContextProvider } from './context/ModalContext.js';
import { BooksContextProvider } from './context/BooksContext.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <BooksContextProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </BooksContextProvider>
);