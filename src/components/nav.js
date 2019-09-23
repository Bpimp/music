import React from 'react';
import { Menu} from 'antd';

const{SubMenu}=Menu;
class Nav extends React.Component{
    render(){
        return (
            <Menu mode="horizontal" theme="dark">
                <SubMenu  title={
                    <span className="submenu-title-wrapper">
                        发现音乐
                    </span>
                }>
                    <Menu.Item>推荐</Menu.Item>                    
                    <Menu.Item>排行榜</Menu.Item>
                    <Menu.Item>歌单</Menu.Item>
                    <Menu.Item>主播电台</Menu.Item>
                    <Menu.Item>歌手</Menu.Item>
                    <Menu.Item>新碟上架</Menu.Item>
                </SubMenu>
                <Menu.Item key="app">
                    我的音乐
                </Menu.Item>
                <Menu.Item>
                    朋友
                </Menu.Item>
                <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
                </Menu.Item>
            </Menu>
        )
    }
}
export default Nav;