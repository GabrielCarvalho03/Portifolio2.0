import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { RouterProvider } from "react-router-dom";
import { Router } from './routes';
import { Home } from './page/home';
import { Teste } from './page/teste';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
