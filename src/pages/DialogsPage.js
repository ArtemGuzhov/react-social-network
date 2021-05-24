import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { DialogItem } from '../components/DialogItem/DialogItem'
import { MessagesItem } from '../components/MessagesItem/MessagesItem'

export const MessagesPage = () => {
  const dialogs = [
    { user: 'Артем Гужов', id: '1' },
    { user: 'Семен Коротков', id: '2' },
  ]

  const messages = [
    {
      user: 'Артем Гужов',
      message: 'Привет',
    },
    { user: 'Семен Коротков', message: 'Привет)' },
  ]

  return (
    <>
      <Container>
        <Row>
          <Col className="left-column" xs={3}>
            <div className="dialogs">
              <div className="dialogs-item">
                {dialogs.map((dg, index) => {
                  // let newIndex = index + 'dialogs'
                  return <DialogItem props={dg} key={index} />
                })}
              </div>
            </div>
          </Col>
          <Col className="right-column" xs={9}>
            <div className="messages">
              {messages.map((mes, index) => {
                return <MessagesItem props={mes} key={index} />
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
