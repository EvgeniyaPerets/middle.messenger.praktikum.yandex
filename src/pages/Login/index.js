import Handlebars from 'handlebars'
import login from './login.tmlp'
import button from '../../partials/button/button.tmpl'
import input from '../../partials/input/input.tmpl'
import link from '../../partials/link/link.tmpl'

Handlebars.registerPartial('button', button)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('link', link)

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#login')

  const template = Handlebars.compile(login)

  const result = template({
    title: 'Вход',
    loginContext: { placeholder: 'Логин', type: 'login' },
    passwordContext: { placeholder: 'Пароль', type: 'password' },
    buttonContext: { class: 'login_button', btn: 'Вход' },
    linkContext: { text: 'Нет аккаунта?', link: '/' }
  })

  root.innerHTML = result
})