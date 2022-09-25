import React from 'react'

function Button(props) {
    const {style,buttonText, action}=props
  return (
    <button style={style} onClick={action}>{buttonText}</button>
  )
}

export default Button