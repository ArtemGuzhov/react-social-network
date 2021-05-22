import React from 'react'
import { ContentPost } from './ContentPost'

export const Posts = ({ props }) => {
  const style = {
    marginTop: '5px',
    marginBottom: '5px',
  }

  return (
    <>
      <div className="row" style={style}>
        <div className="col-12">
          <ContentPost props={props} />
        </div>
      </div>
    </>
  )
}
