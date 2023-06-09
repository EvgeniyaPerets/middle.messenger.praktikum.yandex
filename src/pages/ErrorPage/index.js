import Handlebars from 'handlebars';
import error from './error.tmpl'
import link from '../../partials/link/link.tmpl'

Handlebars.registerPartial('link', link)

document.addEventListener('DOMContentLoaded', () => {
  const root500 = document.querySelector('#error500')
  const root400 = document.querySelector('#error400')

  if (root500) {
    const template = Handlebars.compile(error)
    const result = template({
      errorStatus: 500,
      errorText: 'Мы уже фиксим',
      linkContext: { link: '/', text: 'Назад к чатам' }
    })
    root500.innerHTML = result
  }

  if (root400) {
    const template = Handlebars.compile(error)
    const result = template({
      errorStatus: 400,
      errorText: 'Не туда попали',
      linkContext: { link: '/', text: 'Назад к чатам' }
    })
    root400.innerHTML = result
  }
})