import React from 'react'

const List = ({ data }) => {
  return (
    <div className="List">
        {data.map((item) => {
          return <div className="ListItem" key={item.id}>
            <div className="ListItem__id">{item.id}.</div>
            <div className="ListItem__name">{item.name}</div>
            <div className="ListItem__username">@{item.username}</div>
            </div>
        })}
    </div>
  )
}

export default List
