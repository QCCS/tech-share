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
import {connect} from 'react-redux';
import actions from '../redux/action';
class LeftMiddleRight extends React.Component {
    constructor() {
        super();
        this.state={
            text:"Hello"
        }

    }

    componentDidMount() {
    }

    test = () => {
        console.log(this.context)
    }

    getChildContext() {
        return {
            lmrContextData: {
                data: "lmr-data"
            }
        }
    }
    render = () => {
        return ( <div className="left-middle-right-wrap">

            <div className="left">
                <h1>{this.props.left}</h1>
                <div onClick={this.test}>test</div>
            </div>
            <div className="right">
                <h1>{this.props.right}</h1>
                <h1>{this.props.text}</h1>
                <div onClick={this.props.onButtonClick}>print hello</div>
            </div>


            <div class="center">
                {this.props.middle}
                {/*考虑把createContext1做成函数*/}
                <appContext.Provider value={{createContext1: 'createContext3', createContext2: 'createContext2'}}>
                    <ControlledExpansionPanels></ControlledExpansionPanels>
                </appContext.Provider>

                <br/>
                <br/>
                <appContextTwo.Provider
                    value={{createContextTwo1: 'createContext3', createContextTwo2: 'createContext2'}}>
                    <SideNav></SideNav>
                </appContextTwo.Provider>

            </div>
            <div className="clear"></div>
        </div> )
    }
}
LeftMiddleRight.contextTypes = {
    router: PropTypes.object,
    myContextData: PropTypes.object
};
//必须 定义 getChildContext 方法，返回需要提供的数据
LeftMiddleRight.childContextTypes = {
    lmrContextData: PropTypes.object
};

//映射Redux state到组件的属性
//参数state为reducer中的state，触发器可能会改变他
//这里映射到本组件的props上来，触发器改变之后立即生效
//使用 this.props.text
function mapStateToProps(state) {
    return {text: state.text}
}

//映射Redux actions到组件的属性
//包动作映射到本组件的props上
//使用 this.props.onButtonClick
function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => dispatch(actions.PrintHelloAction),
    }
}

const LeftMiddleRightWrap = connect(mapStateToProps, mapDispatchToProps)(LeftMiddleRight);

export default LeftMiddleRightWrap;