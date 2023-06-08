import Handlebars from 'handlebars'
import start from './pages/start.tmlp'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')

  const template = Handlebars.compile(start)

  const result = template({ text: 'all pages'})

  root.innerHTML = result
})