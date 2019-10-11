import React from 'react';
import {Link} from 'react-router-dom';

class SubNav extends React.Component{
    render(){
        return (
            <div id="subnav">
                <ul className="subnavList">
                    <li><Link to=''><span>推荐</span></Link></li>
                    <li><Link to=''><span>排行榜</span></Link></li>
                    <li><Link to=''><span>歌单</span></Link></li>
                    <li><Link to=''><span>主播电台</span></Link></li>
                    <li><Link to=''><span>歌手</span></Link></li>
                    <li><Link to=''><span>新碟上架</span></Link></li>
                </ul>
            </div>
        )
    }
}
export default SubNav;