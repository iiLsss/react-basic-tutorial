# react-router-dom

NavLink 
Link 
包裹在 BrowserRouter 内

在spa 从列表跳转到详情
总需要传递一下信息给详情组件
传递参数方式：
不推荐 本地存储 redux
推荐 
1. 问号传参
2. 基于state传值(页面刷新 上次传递的state的数据就没了)
3. url地址传参
```

route ->  path='/manage/detail/:id'
to={{
pathname: `/manage/detail/${id}`
}}


let {match:{params}, data} = this.props

id = params.id
```

