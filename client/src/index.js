import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuoteBox from './QuoteBox.js';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
         <QuoteBox />
    </BrowserRouter>,document.getElementById('root'));

