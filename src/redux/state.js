let store = {
  _state: {
    profilePage: {
      profile: {
        surname: 'Гужов',
        name: 'Артем',
        date_of_birth: '02.11.2000',
        city: 'Томск',
        place_of_study: 'ТУСУР (бывш. ТАСУР, ТИАСУР)',
        status: 'Фотографирую закат...',
        more_information: {
          about_me: `Меня зовут Артем, мне 20 лет, сейчас проживаю в городе Томске и учусь
      на специальности информационная безопасность телекоммуникационных
      систем в ТУСУРе. Также работаю удаленно в компании Ростелеком в роли
      разработчика, где в данный момент делаю веб и мобильное приложения.
      Еще я состоял в студенческом педагогическом отряде, с которым мы
      проводили мастер классы для детей в детских садах и больницах, а также
      выезжали в республику Крым для работы в качестве вожатого. Вожатым я
      проработал 2 смены с детьми от 9 до 12 лет. В свободное время я
      провожу время с друзьями, занимаюсь спортом и играю на гитаре.`,
          groups: 'Факульт безопасности ТУСУР',
        },
      },
      posts: [
        {
          user: 'Артем Гужов',
          content: 'Я изучаю React',
          data: '15 мая 2021',
        },
        {
          user: 'Артем Гужов',
          content: 'Использую props',
          data: '21 мая 2021',
        },
        {
          user: 'Артем Гужов',
          content: 'Изучил NavLink',
          data: '23 мая 2021',
        },
      ],
      sumbitPost: {
        newPostText: '',
      },
    },
  },
  getState() {
    debugger
    return this._state
  },
  _callSubscriber() {
    console.log('render entree tree')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  addPost() {
    debugger
    let newPost = {
      user: 'Семен Коротков',
      content: this._state.profilePage.sumbitPost.newPostText,
      data: '24 мая 2021',
    }

    this._state.profilePage.posts.push(newPost)
    this._callSubscriber(this._state)
  },
  changeNewPostText(newText) {
    this._state.profilePage.sumbitPost.newPostText = newText

    this._callSubscriber(this._state)
  },
}

export default store
