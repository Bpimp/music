function NavList(state={
    checkedURL:'/all',
    list:[
        {
            title:'发现音乐',
            url:'/all'
        },{
            title:'我的音乐',
            url:'/mymusic'
        },{
            title:'朋友',
            url:'/friend'
        },{
            title:'商城',
            url:'/shop'
        },{
            title:'音乐人',
            url:'/musician'
        },{
            title:'下载客户端',
            url:'/download'
        }
    ]
},action){
    switch(action.type){
        case 'CHANGE_SELECT':
            return {
                checkedURL:action.checkedURL,
                list:state.list
            }
        default:
            return state;
    }
}
export default NavList;