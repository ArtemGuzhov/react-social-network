import React from 'react'

export const PlaceOfStudy = ({ props }) => {
  const style = {
    marginTop: '5px',
    marginBottom: '15px',
  }

  return (
    <>
      <div className="row" style={style}>
        <strong className="col-4">Место учебы:</strong>
        <span className="col-8">{props.place_study}</span>
      </div>
    </>
  )
}
