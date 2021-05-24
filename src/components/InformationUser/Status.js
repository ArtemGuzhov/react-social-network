import React from 'react'

export const Status = ({ props }) => {
  const style = {
    height: '1px',
    backgroundColor: 'black',
    marginTop: '10px',
    marginBottom: '10px',
  }

  return (
    <>
      <span>{props}</span>
      <div className="Line" style={style}></div>
    </>
  )
}
