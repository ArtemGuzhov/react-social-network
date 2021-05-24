import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import photo from '../../images/avatar.JPG'

export const MessagesItem = ({ props }) => {
  return (
    <>
      <Row>
        <Col xs={5}>
          <Card>
            <Row>
              {/* <Col xs={1}>
                <Card.Img src={photo} style={{ width: '4rem' }} />
              </Col> */}
              <Col xs={12}>
                <Card.Body>
                  <Card.Title>{props.user}</Card.Title>
                  <Card.Text>{props.message}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}
