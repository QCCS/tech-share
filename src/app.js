/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import Tags from './js/react-components/tag';
import Header from './js/react-components/header';
import Footer from './js/react-components/footer';
import LeftRight from './js/layout/left-right';
import LeftMiddleRight from './js/layout/left-middle-right';
class App extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
    }

    render = () => {
        return ( <div>
            <Header>
                这是header
            </Header>
            {this.props.layout === "LR" && <LeftRight left={<div>left</div>}
                                                      right={<div>right</div>}
            />}
            {this.props.layout === "LMR" && <LeftMiddleRight left={<div>left</div>}
                              right={<div>right</div>}
                              middle={<div><Tags tags={["tags1"]}></Tags></div>}
            />}
            {this.props.children}
            <Footer>
                这是Footer
            </Footer>
        </div> )
    }
}
export default App;