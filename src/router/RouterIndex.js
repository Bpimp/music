import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Index from '../view/index/index';
import Mymusic from '../view/myMusic/index';

class RouterIndex extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' render={()=>(
                    <Redirect to="/index/all"/>
                )}/>
                <Route path="/index/:id" component={Index}/>
                <Route path='/mymusic' component={Mymusic}/>
            </Switch>
        )
    }
}
export default RouterIndex;