import Handlebars from 'handlebars'
import Chats from './pages/Chats'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Settings from './pages/SettingsProfile'
import Signin from './pages/Signin'
import start from './pages/start.tmlp'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')

  const getPage = () => {
    switch (window.location.pathname) {
      case '/login':
        return Login
      case '/500':
        return ErrorPage.page500
      case '/404':
        return ErrorPage.page404
      case '/signin':
        return Signin
      case '/settings':
        return Settings
      case '/profile':
        return Profile
      case '/chats':
        return Chats
      case '/':
        return Handlebars.compile(start)({ text: 'all pages'})
      default:
        return ErrorPage.page404
    }
  }
  root.innerHTML = getPage()
})