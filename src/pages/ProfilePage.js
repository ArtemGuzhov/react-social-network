import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Avatar } from '../components/Avatar/Avatar'
import { InformationUser } from '../components/InformationUser/InformationUser'
import { Posts } from '../components/Posts/Posts'
import { SumbitPost } from '../components/SumbitPost/SumbitPost'

export const ProfilePage = (props) => {
  const style = {
    marginTop: '15px',
    marginBottom: '15px',
  }
  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <Avatar />
          </Col>
          <Col xs={9}>
            <InformationUser props={props.state.profile} />
          </Col>
        </Row>
        <Row style={style}>
          <Col xs={12}>
            <SumbitPost
              addPost={props.addPost}
              changeNewPostText={props.changeNewPostText}
              props={props.state.sumbitPost.newPostText}
            />
          </Col>
        </Row>
        <Row style={style}>
          <Col xs={12}>
            {props.state.posts.map((con, index) => {
              return <Posts props={con} key={index} />
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}
