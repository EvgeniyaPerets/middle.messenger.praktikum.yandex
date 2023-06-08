import Handlebars from 'handlebars'
import signin from './signin.tmlp'
import button from '../../partials/button/button.tmpl'
import input from '../../partials/input/input.tmpl'
import link from '../../partials/link/link.tmpl'

Handlebars.registerPartial('button', button)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('link', link)

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#signin')

  const template = Handlebars.compile(signin)

  const result = template({
    title: 'Регистрация',
    emailContext: { placeholder: 'Почта', type: 'email' },
    signinContext: { placeholder: 'Логин', type: 'login' },
    nameContext: { placeholder: 'Имя', type: 'text' },
    surnameContext: { placeholder: 'Фамилия', type: 'text' },
    phoneContext: { placeholder: 'Телефон', type: 'text' },
    passwordContext: { placeholder: 'Пароль', type: 'password' },
    secondPasswordContext: { placeholder: 'Пароль (ещё раз)', type: 'password' },
    buttonContext: { class: 'signin_button', btn: 'Зарегистрироваться' },
    linkContext: { text: 'Вход', link: '/' }
  })

  root.innerHTML = result
})