import React from 'react'

function Heading({text='', className=''}) {
  return (
    <>
        <div className={className}>{text}</div>
    </>
  )
}

export default Heading