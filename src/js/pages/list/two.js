/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import '../../../css/pages/list/two.css';
import { withStyles } from '@material-ui/core/styles';
import { createFee,deleteFee,updateFee,getFee} from '../../service/api';
const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: "#ff0000",
        },
    },
});
class ListOne extends React.Component {
    constructor(){
        super();
        this.state = {
            value: 'recents',
        };

    }
    componentDidMount(){
    }


    _createFee=()=>{
        createFee()
            .then(res=>{
                console.log(res)
            });
    }

    _updateFee=()=>{
        updateFee()
            .then(res=>{
                console.log(res)
            });
    }

    _getFee=()=>{
        getFee()
        .then(res=>{
            console.log(res)
        });
    }
    _deleteFee=()=>{
        deleteFee()
            .then(res=>{
                console.log(res)
            });
    }

    render = () => {
        return (<div className="components-md-wrap">
            <div onClick={this._createFee}>post axios</div>
            <div onClick={this._updateFee}>update axios</div>
            <div onClick={this._getFee}>get axios</div>
            <div onClick={this._deleteFee}>delete axios</div>
        </div> )
    }
}
export default withStyles(styles)(ListOne);
