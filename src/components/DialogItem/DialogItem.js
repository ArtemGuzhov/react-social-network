import React from 'react'
import { NavLink } from 'react-router-dom'
import cs from './DialogItem.module.css'

export const DialogItem = ({ props }) => {
  let path = `/dialogs/${props.id}`

  return (
    <>
      <div className={cs.dialogs}>
        <NavLink to={path} activeClassName={cs.active}>
          {props.user}
        </NavLink>
      </div>
    </>
  )
}
