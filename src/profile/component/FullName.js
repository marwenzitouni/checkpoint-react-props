import React from 'react'

const FullName = (props) => {
  return (
  <>
  <h1><div className="name">My Name Is {props.name}</div></h1>
  <div>{props.children} </div>
  </>
  )
}

FullName.defaultProps = {
  name: "name",
  children:"/public/tempImg-103.jpg"
};

export default FullName