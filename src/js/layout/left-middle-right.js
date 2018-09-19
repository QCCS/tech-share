/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import '../../css/layout/left-middle-right.css';
import PropTypes from 'prop-types';
import ControlledExpansionPanels from '../pages/components-test/controlled-expansion-panels';
import SideNav from '../pages/components-test/side-nav';

import appContext from '../global-data/app-context';
import appContextTwo from '../global-data/app-context-two';
class LeftMiddleRight extends React.Component {
    constructor(){
        super();

    }
    componentDidMount(){
    }

    test=()=>{
        console.log(this.context)
    }
    getChildContext(){
        return {
            lmrContextData:{
                data:"lmr-data"
            }
        }
    }
    render = () => {
        return ( <div className="left-middle-right-wrap">
            <div className="left">{this.props.left}
                <div onClick={this.test}>test</div>
            </div>
            <div className="right">{this.props.right}</div>
            <div class="center">
                {this.props.middle}
                {/*考虑把createContext1做成函数*/}
                <appContext.Provider value={{createContext1: 'createContext3',createContext2: 'createContext2'}}>
                    <ControlledExpansionPanels></ControlledExpansionPanels>
                </appContext.Provider>

                <appContextTwo.Provider value={{createContextTwo1: 'createContext3',createContextTwo2: 'createContext2'}}>
                    <SideNav></SideNav>
                </appContextTwo.Provider>

            </div>
            <div className="clear"></div>
        </div> )
    }
}
LeftMiddleRight.contextTypes = {
    router:PropTypes.object,
    myContextData: PropTypes.object
};
//必须 定义 getChildContext 方法，返回需要提供的数据
LeftMiddleRight.childContextTypes = {
    lmrContextData: PropTypes.object
};

export default LeftMiddleRight;