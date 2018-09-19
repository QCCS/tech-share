/**
 * Created by zhouli on 18/9/15
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './css/index.css';
import './css/reset.css';
//ant-design 的样式
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
// BrowserRouter 慎用
import { HashRouter as Router} from "react-router-dom";
ReactDOM.render(
    <Router>
        <App layout={"LR"}/>
    </Router>, document.getElementById('body')
);