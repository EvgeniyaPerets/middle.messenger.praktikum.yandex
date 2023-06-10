import Handlebars from 'handlebars'
import settings from './settings.tmlp'
import button from '../../partials/button/button.tmpl'
import input from '../../partials/input/input.tmpl'
import link from '../../partials/link/link.tmpl'

Handlebars.registerPartial('button', button)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('link', link)

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#settings')

  const template = Handlebars.compile(settings)

  const result = template({
  })

  root.innerHTML = result
})