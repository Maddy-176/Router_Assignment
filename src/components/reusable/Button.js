import React from 'react'

function Button(props) {
    const {style,buttonText, action}=props
  return (
    <button style={style} onClick={action} data-testid="back-btn">{buttonText}</button>
  )
}

export default Button