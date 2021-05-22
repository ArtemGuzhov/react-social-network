import React from 'react'
import { Navbar } from 'react-bootstrap'

export const Header = () => {
  return (
    <>
      <div style={{ height: '55px' }}>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand>React-social-network</Navbar.Brand>
        </Navbar>
      </div>
    </>
  )
}
