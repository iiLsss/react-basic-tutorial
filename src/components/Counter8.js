import React, {useState, useReducer, useEffect} from 'react'

/**
 * 如何请求数据 使用async await
 * 
 */


function useRequest(url) {
  let limit = 5
  let [offset, setOffset] = useState(0)
  let [data, setData] = useState([])
  // async function loadMore() {
  //   setData(null)
  //   let newData = await fetch(`${url}?offset=${offset}&limit=${limit}`).then(res => res.json())
  //   setData([...data, ...newData])
  //   setOffset(offset+ newData.length)
  // }
  // useEffect(loadMore, [])

  useEffect(() => {
    async function fetchData() {
      setData(null)
      let newData = await fetch(`${url}?offset=${offset}&limit=${limit}`).then(res => res.json())
      setData([...data, ...newData])
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])
  function loadMore() {
    setOffset(offset + limit)
  }
  return [data, loadMore]
}

function App() {
  let [user, loadMore] = useRequest('http://localhost:8888/api/users')

  if (user === null || !user.length) {
    return <div>加载中</div>
  }
  console.log(user);
  return (
    <>
      {
        user.map((item, index) => {
          return(
            <p key={index}>{item.id}___{item.name}</p>
          )
        })
      }
      <button onClick={loadMore}></button>
    </>
  )
}

export default App

/**
 * logger 状态前打印异常 状态变化后打印一次 redux-logger
 * 
 * 
 */