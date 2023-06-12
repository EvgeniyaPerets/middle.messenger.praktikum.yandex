import Handlebars from 'handlebars'
import settingsProfile from './settingsProfile.tmpl'
import button from '../../partials/button/button.tmpl'
import input from '../../partials/input/input.tmpl'

Handlebars.registerPartial('button', button)
Handlebars.registerPartial('input', input)

export default Handlebars.compile(settingsProfile)({
  title: 'Изменить данные',
  emailContext: {
    placeholder: 'Почта',
    type: 'email',
    name: 'email',
    value: 'pochta@yandex.ru',
  },
  signinContext: {
    placeholder: 'Логин',
    type: 'login',
    name: 'login',
    value: 'ivanivanov',
  },
  nameContext: {
    placeholder: 'Имя',
    type: 'text',
    name: 'first_name',
    value: 'Иван',
  },
  surnameContext: {
    placeholder: 'Фамилия',
    type: 'text',
    name: 'second_name',
    value: 'Иванов',
  },
  displayNameContext: {
    placeholder: 'Имя в чате',
    type: 'text',
    name: 'display_name',
    value: 'Иван',
  },
  phoneContext: {
    placeholder: 'Телефон',
    type: 'text',
    name: 'phone',
    value: '+7(909)9673030',
  },
  buttonContext: {
    class: 'settings_profile_button',
    btn: 'Сохранить'
  },
})
