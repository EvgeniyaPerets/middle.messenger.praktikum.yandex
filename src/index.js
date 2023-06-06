import Handlebars from 'handlebars'
import greeting from './templates/greeting'
import button from './partials/button.tmpl'

Handlebars.registerPartial('button', button)

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')

  const template = Handlebars.compile(greeting)

  const result = template({ name: 'fuck'})

  root.innerHTML = result
})