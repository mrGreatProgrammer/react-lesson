import React from 'react'
import { PropsApp } from '../../types/app'

const Count = React.memo(({value}: PropsApp) => {

  return (
    <div>{value}</div>
  )
})

export default Count