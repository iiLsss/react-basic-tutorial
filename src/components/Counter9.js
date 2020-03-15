import React, {useState, useEffect} from 'react'
import './index.css'

function useAnimate(initialClassName) {
  let [className, setClassName] = useState(initialClassName)
  let [state, setState] = useState('')

  useEffect(() => {
    if(state === 'bigger'){
      setClassName(`${initialClassName} ${initialClassName}-bigger`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  function start() {
    setState('bigger')
  }

  return [className, start]
}

function App() {
  let [ className, start] = useAnimate('circle')
  return (
    <>
      <button onClick={start}>start</button>
      <div className={className}></div>
    </>
  )
}

export default App