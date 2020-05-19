import React from 'react';
import ReactDOM from 'react-dom';
// import 'rsuite/dist/styles/rsuite-default.css'
import 'antd/dist/antd.css'; 
// import './index.css'
// import App from './render/App'
// import Counter from './components/Counter'
// import Counter from './components/Counter2'
// import Counter from './components/Counter3'
// import Counter from './components/Counter4'
// import Counter from './components/Counter5'
// import Counter from './components/Counter6'
// import Counter from './components/Counter7'
// import Counter from './components/Counter8'
// import Counter from './components/Counter9'
// import TodoList from './TodoList'

// import CheckTree from './rsuite/CheckTree'
import OrgList from './OrgList'
import TreeList from './TreeList'
ReactDOM.render(<>
  <OrgList />
  <br/>
  <br/>
  <TreeList />
  </>, document.getElementById('root'))
