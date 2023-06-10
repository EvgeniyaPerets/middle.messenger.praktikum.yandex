import Handlebars from 'handlebars'
import chats from './chats.tmpl'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#chats')

  const template = Handlebars.compile(chats)

  const result = template({})

  root.innerHTML = result
})