import React from 'react'
import { City } from './City'
import { DateOfBirth } from './DateOfBirth'
import { MoreInfo } from './MoreInfo/MoreInfo'
import { PlaceOfStudy } from './PlaceOfStudy'
import { Status } from './Status'

export const InformationUser = ({ props }) => {
  return (
    <>
      <div className="row">
        <h3 className="col-12">
          {props.name} {props.surname}
        </h3>
        <div className="col-12">
          <Status props={props.status} />
        </div>
        <div className="col-12">
          <DateOfBirth props={props.date_of_birth} />
        </div>
        <div className="col-12">
          <City props={props.city} />
        </div>
        <div className="col-12">
          <PlaceOfStudy props={props.place_of_study} />
        </div>
        <div className="col-12">
          <MoreInfo props={props.more_information} />
        </div>
      </div>
    </>
  )
}
