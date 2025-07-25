import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import AppRouter from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
