import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export const ContentPost = ({ props }) => {
  return (
    <>
      <Card>
        <Card.Header>
          <Row>
            <Col xs={11}>{props.user}</Col>
            <Col xs={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{props.content}</p>
            <footer className="blockquote-footer">
              Дата размещения: <cite title="Source Title">{props.data}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      {/* <Row>
        <Col xs={12}>
          <Card>
            <Row>
              <Col xs={1}>
                <Card.Img src={photo} style={{ width: '5rem' }} />
              </Col>
              <Col xs={11}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row> */}
    </>
  )
}
