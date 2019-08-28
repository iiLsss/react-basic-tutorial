# react-basic-tutorial

```bash
npx create-react-app my-app
cd my-app
npm start

```

src目录

- `index.js`项目入口文件

工程目录
+ react
+ react-dom
+ react-scripts集成了webpack需要的内容
  - babel
  - css
  - eslint
  - webpack


```
ReactDom.render([JSX], [CONTAINER], [CALLBACK]): 把JSX元素渲染到页面中
JSX: REACT虚拟元素
CONTAINER: 容器，我们想把元素放到页面中的哪个容器中
CALLBACK: 当把内容放到页面中呈现触发的回调函数

JSX: REACT独有的语法  JAVASCRIPT+XML

1. 不建议我们把jsx直接渲染到body中，而是放在自己创建的容器中。
2. 在JSX中出现的{}是存放js的，但是要求js代码执行完成有返回的结果
```

## React基础知识复习
1. react是face-book公司开发的一款MVC版js框架
  MVC:Model（数据层）、VIEW（视图层）、CONTROLLER（控制层）
  核心思想：通过数据的改变来影响视图的渲染（数据驱动）

2. 基于脚手架create-react-app快速构建一个react工程项目结构
  自动安装react的核心组件：react、react-dom
  自动安装webpack，并且完成相关的配置
   -> 区分了开发环境和生成环境
   -> 安装babel已经对应的语言解析包，可以把react和es6进行编译



## redux基础知识复习

redux：进行状态统一管理的库（适用于任何技术体系的项目）
  1.  只要两个或者多个组件之间想要实现信息的共享，都可以基于redux解决，把共享的信息存储到redux容器中进行管理
  2. 还可以适用redux做临时存储：页面加载的时候，把服务器获取的数据信息存储到redux中，组件渲染需要的数据，从redux中获取，这样只要页面不刷新，路由切换的时候，再次渲染组件不需要重新从服务器拉去数据，直接从redux中获取即可；页面刷新，从头开始！

**createStore**

createStore(reducer) 存储的是各个组件状态信息
```
发布订阅事件池
当容器中的状态改变，通知事件池中的方法一次执行
```

reducer函数 修改容器状态信息的管理员
```js
state: 原有状态 action:派发任务

switch (action.type) {
  case TYPE.XXX：
      sate = ...
}

return state => 把原有状态信息替换
```

`store.subscribe(() => {})`
subscribe是把方法增加到事件池中
增加的方法一般都是：从新容器中获取最新的状态信息系，然后重新渲染组件

`store.dispatch({type:xxx,count:123})`

通过派发恩物，告知reducer执行需要把state和action传递进行，reducer执行，把容器中的状态改变

## react-redux

react-redux是把redux进一步封装，适配react项目，让redux操作更简洁

store文件夹的内容和redux一模一样
在组件调取使用的时候可以优化一些步骤

1.provider根组件

当前整个项目都在provider组件下
作用就是把创建的store可以供内部任何后代组件使用(基于上下文完成的)

2.connect高阶组件



1. action-types 增加行为标识信息
2. action 增加行为方法
3. head.js调取action中方法
4. reducer中修改state状态


spa & mpa

- 单页面应用SPA
- 多页面应用MPA
如何实现单页面应用

1. 项目基于服务器渲染
2. 基于iframe实现单页面应用
3. 模块化开发
  AMD: require.js
  CMD: sea.js

## react-router-dom

BrowserRouter vs HashRouter
两种常用的路由实现思想
BrowserRouter浏览器路由
HashRouter哈希

[BrowserRouter]
A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.

[HashRouter]
A <Router> that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

exact 严格匹配

Switch 只要有一种情况校验成功，就不在向后校验


redux中间件
redux-logger: 能够在控制台清晰的展示出当前redux操作的流程和信息

redux-thunk:处理异步的dispatch派发

redux-promise:在dispatch派发的时候支持promise操作