/**
 * Created by zhouli on 18/9/15
 */
//标签显示的组件
class Tags extends React.Component {
    constructor(){
        super();
        this.state = {
            data: ''
        }
    }
    componentDidMount = () =>{
        console.log("componentDidMount")
    }
    clickTag = () => {
        console.log("click tag")
    }
    render = () => {
        return ( <div>
            {this.props.tags.map((item,index)=>{
                return <span key={index} onClick={this.clickTag}>{item}</span>
            })}
        </div> )
    }
}