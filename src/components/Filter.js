import React from 'react'
import { Outlet } from 'react-router-dom'

const Filter = (isShow) => {
  return <>{isShow == 'true' ? <div>hi</div> : null}</>
}

export default Filter
