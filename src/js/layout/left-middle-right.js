/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import '../../css/layout/left-middle-right.css';
class LeftMiddleRight extends React.Component {
    constructor(){
        super();

    }
    componentDidMount(){
    }

    render = () => {
        return ( <div className="left-middle-right-wrap">
            <div className="left">{this.props.left}</div>
            <div className="right">{this.props.right}</div>
            <div class="center">
                {this.props.middle}
            </div>
        </div> )
    }
}
export default LeftMiddleRight;