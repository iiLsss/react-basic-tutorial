import React, { Component } from 'react';

export default function WithLogger (Comp) {
  return class WithLogger extends Component {
    componentWillMount() {
      console.time('diqiu')
    }
    componentDidMount() {
      console.timeEnd('diqiu')
    }
    render() {
      return <Comp {...this.props} />
    }
  }
}