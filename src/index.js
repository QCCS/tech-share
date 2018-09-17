/**
 * Created by zhouli on 18/9/15
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './css/index.css';
import './css/reset.css';
import { BrowserRouter as Router} from "react-router-dom";
ReactDOM.render(
    <Router>
        <App layout={"LR"}/>
    </Router>, document.getElementById('body')
);