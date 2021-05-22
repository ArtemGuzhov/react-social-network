import React from 'react'
import { City } from './City'
import { DateOfBirth } from './DateOfBirth'
import { MoreInfo } from './MoreInfo/MoreInfo'
import { PlaceOfStudy } from './PlaceOfStudy'
import { Status } from './Status'

export const InformationUser = () => {
  const status = { status: 'Фотографирую закат...' }
  const date_birth = { dabi: '02.11.2000' }
  const city = { city: 'Томск' }
  const study = { place_study: 'ТУСУР (бывш. ТАСУР, ТИАСУР)' }
  const mInfo = {
    about_me: ` Меня зовут Артем, мне 20 лет, сейчас проживаю в городе Томске и учусь
    на специальности информационная безопасность телекоммуникационных
    систем в ТУСУРе. Также работаю удаленно в компании Ростелеком в роли
    разработчика, где в данный момент делаю веб и мобильное приложения.
    Еще я состоял в студенческом педагогическом отряде, с которым мы
    проводили мастер классы для детей в детских садах и больницах, а также
    выезжали в республику Крым для работы в качестве вожатого. Вожатым я
    проработал 2 смены с детьми от 9 до 12 лет. В свободное время я
    провожу время с друзьями, занимаюсь спортом и играю на гитаре.`,
    groups: ` РАЙЗ, ТОПОР Хранилище, Видео Долбоёба, ТУСУР Подслушано, Факультет
    Безопасности ТУСУР, Профсоюзная организация студентов ТУСУР, ТУСУР
    online, Томск Сдать Снять квартиру Аренда собственик, БесПосредника.ру
    Аренда БЕЗ ПОСРЕДНИКОВ Томск, ТВØЯ ПΛРΛΔНΛЯ, ДОЛ Радость Крым 2019,
    Отдел Образовательных Программ, Ведьмак, Волонтерская служба ТУСУР Наш
    Формат Томск, Пятёрочка`,
  }

  return (
    <>
      <div className="row">
        <h3 className="col-12">Артем Гужов</h3>
        <div className="col-12">
          <Status props={status} />
        </div>
        <div className="col-12">
          <DateOfBirth props={date_birth} />
        </div>
        <div className="col-12">
          <City props={city} />
        </div>
        <div className="col-12">
          <PlaceOfStudy props={study} />
        </div>
        <div className="col-12">
          <MoreInfo props={mInfo} />
        </div>
      </div>
    </>
  )
}
