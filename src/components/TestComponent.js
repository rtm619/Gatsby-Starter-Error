import React from 'react'

export default props => {
  // Here, if you pass all props except for location, everything works as expected.
  const { location, ...other } = props

//   return <div {...other} />

  return <div {...props} />
}
