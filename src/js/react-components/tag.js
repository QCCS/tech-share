/**
 * Created by zhouli on 18/9/15
 */
//一个现实标签的组件
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
            {this.props.tags.map(item=>{
                return <span onClick={this.clickTag}>{item}</span>
            })}
        </div> )
    }
}