1. 创建储存状态的容器createStore，并且传入reducer
```js
import {createStore} from 'redux'
let store = createStore(reducer)
```

2. reducer 状态管理员：管理容器中状态

```js
let reducer = (state ={n:0, m: 0}, action) => {
  switch (action.type) {
    case 'VOTE_SUPPORT':
      state = {...state, n: state.n + 1}
      break;
    case 'VOTE_AGANISt':
      state = { ...state, m: state.m + 1 }
      break;
    default:
      break;
  }
  return state; // 只有把最新的state返回，原有的状态才会被修改
}
```

3. 基于getState获取容器中的最新状态信息

```js
let { store: { getState, subscribe} } = this.props
let unsubscribe = subscribe(() => {
  let { n, m } = getState()
  this.setState({
    n,m
  })
```

4. 基于dispatch派发任务，根据传递的行为标识，通知reducer中对应的修改状态任务执行

```js
dispatch({
  type: 'VOTE_AGANISt'
})
```

|--stroe
  |-- reducer 存放每一个模块的reducer
    |-- vote.js
    |-- presonal.js
    |-- ...
    |-- index.js 把每一个模块的reducr最后合并为一个reducer
    
  |-- action 存放每一个模块需要派发任务（ActionCreater）
    |-- vote.js
    |-- presonal.js
    |-- ...
    |-- index.js 所有模块的action进行合并

  |-- action-types.js 所有派发任务的行为标识都在这里进行宏观管理
  |-- index.js 创建store