import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import BooksContext from './context/books';

const root = createRoot(document.getElementById('root'));

root.render(
    <BooksContext.Provider value = {5} >
        <App />
    </BooksContext.Provider>
);