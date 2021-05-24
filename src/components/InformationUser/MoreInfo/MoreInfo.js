import React from 'react'
import { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'
import { AboutMe } from './AboutMe'
import { GroupUser } from './GroupUser'

export const MoreInfo = ({ props }) => {
  const [open, setOpen] = useState()

  const line = {
    height: '1px',
    backgroundColor: 'black',
    marginTop: '15px',
    marginBottom: '10px',
  }

  const borderChar = {
    marginTop: '10px',
    marginBottom: '10px',
  }
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        variant="outline-primary col"
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Показать подробную информацию
      </Button>
      <Collapse in={open}>
        <div className="text-collapse">
          <div className="row" style={borderChar}>
            <strong className="col-4">Личная информация</strong>
            <div className="col-8" style={line}></div>
          </div>
          <AboutMe props={props.about_me} />
          <GroupUser props={props.groups} />
        </div>
      </Collapse>
    </>
  )
}
