/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import Header from './js/react-components/header';
import Footer from './js/react-components/footer';
import { Link } from "react-router-dom";
import Routes from "./routes"

class App extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
    }
    render = () => {
        return ( <div>
            <Header>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/list">list</Link>&nbsp;|&nbsp;
                <Link to="/about">about</Link>
            </Header>
            <Routes/>
            <Footer>
                这是Footer
            </Footer>
        </div> )
    }
}

export default App;