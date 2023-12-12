import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
import App from "./main_app";

const rootElement = document.getElementById('root');

//const root = createRoot(container!); 
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);