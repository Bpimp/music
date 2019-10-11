import React from 'react';
import {Link} from 'react-router-dom';
import I from './Icon';
import SubNav from './subNav';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentHref:'/'
        }
    }
    handleClick=(e)=>{
        let href=e.target.getAttribute('href')
        this.setState({
            currentHref:href
        })
    }
    render(){
        return (
            <header>
                <nav id="nav">
                    <h1 className="logo">
                        <Link to='/'>
                            <img src={require("../../public/logo.jpg")} alt="logo"/>
                        </Link> 
                    </h1>
                    <ul className="m-nav" onClick={(e)=>this.handleClick(e)}>
                        <li><Link to='/'>发现音乐<I/></Link></li>
                        <li><Link to='/mymusic'>我的音乐<I/></Link></li>
                        <li><Link to='/fiends'>朋友<I/></Link></li>
                        <li><Link to='/shop'>商城<I/></Link></li>
                        <li><Link to='/musician'>音乐人<I/></Link></li>
                        <li><Link to='/download'>下载客户端<I/></Link></li>
                    </ul>
                </nav>
                <SubNav/>
            </header>
        )
    }
}
export default Nav;