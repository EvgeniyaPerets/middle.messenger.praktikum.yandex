import Handlebars from 'handlebars'
import signin from './signin.tmlp'
import button from '../../partials/button/button.tmpl'
import input from '../../partials/input/input.tmpl'
import link from '../../partials/link/link.tmpl'

Handlebars.registerPartial('button', button)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('link', link)

export default Handlebars.compile(signin)({
  title: 'Регистрация',
  emailContext: {
    placeholder: 'Почта',
    type: 'email',
    name: 'email'
  },
  signinContext: {
    placeholder: 'Логин',
    type: 'login',
    name: 'login'
  },
  nameContext: {
    placeholder: 'Имя',
    type: 'text',
    name: 'first_name'
  },
  surnameContext: {
    placeholder: 'Фамилия',
    type: 'text',
    name: 'second_name'
  },
  phoneContext: {
    placeholder: 'Телефон',
    type: 'text',
    name: 'phone'
  },
  passwordContext: {
    placeholder: 'Пароль',
    type: 'password',
    name: 'password'
  },
  secondPasswordContext: {
    placeholder: 'Пароль (ещё раз)',
    type: 'password',
    name: 'second_password'
  },
  buttonContext: {
    class: 'signin_button',
    btn: 'Зарегистрироваться',
    type: 'submit'
  },
  linkContext: {
    text: 'Вход',
    link: '/'
  }
})
