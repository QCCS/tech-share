/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import LeftRight from './js/layout/left-right';
import Tags from './js/react-components/tag';
import LeftMiddleRight from './js/layout/left-middle-right';
import {Route,Link} from "react-router-dom";


//渲染路由关系
function routerRender() {
    
}


const Home = () => (
    <div>
        <LeftMiddleRight left={<div>left</div>}
                         right={<div>right</div>}
                         middle={<div><Tags tags={["tags1"]}></Tags></div>}
        />
    </div>
);
//列表
const list = ({ match }) => (
    <div>
        <LeftRight left={<div>
            <h1>几个子路由</h1>
            <ul>
                <li>
                    <Link exact to={`${match.url}`}>zero</Link>
                </li>
                <li>
                    <Link to={`${match.url}/one`}>one</Link>
                </li>
                <li>
                    <Link to={`${match.url}/two`}>two</Link>
                </li>
                <li>
                    <Link to={`${match.url}/three`}>three</Link>
                </li>
            </ul>
        </div>}
                   right={<div>
                       <Route path={`${match.url}/:listId`} component={listDetail} />
                       <Route
                           exact
                           path={match.url}
                           render={() => <h3>默认详情</h3>}
                       />
                   </div>}
        />
    </div>
);
//列表详情
const listDetail = (match) => {
    console.log(match)
    return <div>
        listDetail {match.match.params.listId}
    </div>
};
const about = () => (
    <div>
        about
    </div>
);
let routeList = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/list",
        component: list
    },
    {
        path: "/about",
        component: about
    }
]

const Routes = () => (
    <div>
        {routeList.map((item, index) => {
            if (item.path === "/") {
                //exact严格匹配，不然会把在/list的时候，也会显示/的页面
                return <Route
                    exact
                    key={index}
                    path={item.path}
                    component={item.component}/>
            } else {
                return <Route key={index}
                              path={item.path}
                              component={item.component}/>
            }

        })}
    </div>

);
export default Routes;