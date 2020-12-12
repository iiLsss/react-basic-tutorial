class Updater{
  constructor() {
    this.state = {
      name: 'diqiu',
      number: 0
    }
    this.queue = []
  }
  // 异步
  setState(newState) {
    this.queue.push(newState)
  }
  flush() {
    this.queue.forEach(item =>{
      if (typeof item === 'function') {
        this.state = {...this.state, ...item(this.state)}
      } else {
        this.state = {...this.state, ...item}
      }
    })
  }
  // 同步
  // setState(newState) {
  //   if (typeof newState === 'function') {
  //     this.state = {...this.state, ...newState(this.state)}
  //   } else {
  //     this.state = {...this.state, ...newState}
  //   }
  // }
}


let state = new Updater()

state.setState({number: 1})
console.log(state.state);
state.setState((state) => state.number + 1)
console.log(state.state);
state.setState({number: 3})
console.log(state.state);
state.setState({number: 4})
state.flush()
console.log(state.state);