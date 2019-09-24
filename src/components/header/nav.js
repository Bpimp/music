import React from 'react';
import {Link} from 'react-router-dom';
import I from './Icon';

class Nav extends React.Component{
    render(){
        return (
            <header>
                <nav id="nav">
                    <h1 className="logo">
                        <Link to='/'>
                            <img src={require("../../public/logo.jpg")} alt="logo"/>
                        </Link> 
                    </h1>
                    <ul className="m-nav">
                        <li><Link to='/'><span>发现音乐</span><I/></Link></li>
                        <li><Link to='/'><span>我的音乐</span><I/></Link></li>
                        <li><Link to='/'><span>朋友</span><I/></Link></li>
                        <li><Link to='/'><span>商城</span><I/></Link></li>
                        <li><Link to='/'><span>音乐人</span><I/></Link></li>
                        <li><Link to='/'><span>下载客户端</span><I/></Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Nav;