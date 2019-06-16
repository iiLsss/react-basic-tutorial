import React from 'react'

export default function Dialog(props) {
  let {type, conent, children} = props

  let typeValue = type || '系统提示'
  if (typeof type === 'number') {
    switch (type) {
      case 0:
        typeValue = '系统提示'
        break;
      case 1:
        typeValue = '系统警告'
        break;
      default:
        typeValue = '系统异常'
        break;
    }
  }
  return (
    <section className="panel panel-default col-lg-4">
      <div className="panel-heading">
        <h3 className="panel-title">{typeValue}</h3>
      </div>
      <div className="panel-body">{conent}</div>
      {
        children ? <div className="panel-footer">
          children
        </div> : null
      }
      

    </section>
  )
}