import React from 'react'

const Bio = props => {
  return (
    <div>Hello, My name is {props.name} i'am {props.profession}</div>
  )
}

Bio.defaultProps = {
    name:"Marwen Zitouni",
    profession:"Developer Engineer"
}

export default Bio