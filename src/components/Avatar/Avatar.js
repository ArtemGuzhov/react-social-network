import React from 'react'
import { Button, Image } from 'react-bootstrap'
import photo from '../../images/avatar.JPG'

export const Avatar = () => {
  return (
    <>
      <Image src={photo} thumbnail />
      <Button variant="outline-primary col">Редактировать</Button>
    </>
  )
}
