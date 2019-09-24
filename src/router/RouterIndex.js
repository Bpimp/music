import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Index from '../view/index/index';

class RouterIndex extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' render={()=>(
                    <Redirect to="/index/all"/>
                )}/>
                <Route path="/index/:id" component={Index}/>
            </Switch>
        )
    }
}
export default RouterIndex;