import React from 'react'

const handleOnClick = onClick => e => {
  e.preventDefault()
  onClick(e)
}

const Link = ({onClick, children}) => 
  <a href='' onClick={handleOnClick(onClick)}>{children}</a>

export default Link