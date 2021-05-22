import React from 'react'
import { Avatar } from '../components/Avatar/Avatar'
import { InformationUser } from '../components/InformationUser/InformationUser'
import { Posts } from '../components/Posts/Posts'
import { SumbitPost } from '../components/SumbitPost/SumbitPost'

export const ProfilePage = () => {
  const content = [
    {
      user: 'Артем Гужов',
      content: 'Использую props',
      data: '21 мая 2021',
    },
    {
      user: 'Артем Гужов',
      content: 'Я изучаю React',
      data: '18 июня 2018',
    },
  ]

  const style = {
    marginTop: '15px',
    marginBottom: '15px',
  }
  return (
    <>
      <div className="row">
        <div className="col-3">
          <Avatar />
        </div>
        <div className="col-9">
          <InformationUser />
        </div>
      </div>
      <div className="row" style={style}>
        <div className="col-12">
          <SumbitPost />
        </div>
      </div>
      <div className="row" style={style}>
        <div className="col-12">
          {content.map((con, index) => {
            return <Posts props={con} key={index} />
          })}
        </div>
      </div>
    </>
  )
}
