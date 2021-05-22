import React from 'react'

export const City = () => {
  const style = {
    marginTop: '5px',
    marginBottom: '5px',
  }

  return (
    <>
      <div className="row" style={style}>
        <strong className="col-4">Город:</strong>
        <span className="col-8">Томск</span>
      </div>
    </>
  )
}
