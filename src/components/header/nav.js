import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import I from './Icon';
import SubNav from './subNav';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentHref:'/all'
        }
    }
    handleClick=(e)=>{
        let href=e.target.getAttribute('href')
        this.props.dispatch(dispatch=>{
            dispatch({
                type:'CHANGE_SELECT',
                checkedURL:href
            })
        })
    }
    render(){
        let {list,checkedURL}=this.props;
        return (
            <header>
                <nav id="nav">
                    <h1 className="logo">
                        <Link to='/'>
                            <img src={require("../../public/logo.jpg")} alt="logo"/>
                        </Link> 
                    </h1>
                    <ul className="m-nav" onClick={(e)=>this.handleClick(e)}>
                        {list.map((item)=>(
                            <li
                                key={item.url}
                            ><Link 
                                className={item.url===checkedURL?'active':''}
                                to={item.url}
                            >{item.title}<I/></Link></li>
                        ))}
                    </ul>
                </nav>
                <SubNav/>
            </header>
        )
    }
}
export default connect(state=>state.NavList)(Nav);