
let lastState
function useState(ininial) {
  lastState = ininial

  function setState(newState) {
    lastState = newState
  }

  return [lastState, setState]
}

function Counter () {
  let [ state, setState] = useState(0)
}