import Handlebars from 'handlebars';
import Chats from './pages/Chats';
import ErrorPage from './pages/ErrorPage';
import { Login } from './pages/Login';
import Profile from './pages/Profile';
import SettingsPassword from './pages/SettingsPassword';
import Settings from './pages/SettingsProfile';
import Signin from './pages/Signin';
import start from './pages/start.tmlp';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');

  const getPage = () => {
    switch (window.location.pathname) {
      case '/login':
        return new Login({ title: 'Вход' });
      case '/500':
        return ErrorPage.page500;
      case '/404':
        return ErrorPage.page404;
      case '/signin':
        return Signin;
      case '/settings':
        return Settings;
      case '/profile':
        return Profile;
      case '/settings_password':
        return SettingsPassword;
      case '/chats':
        return Chats;
      case '/':
        return Handlebars.compile(start)({ text: 'all pages' });
      default:
        return ErrorPage.page404;
    }
  };

  if (root) {
    const page = getPage();

    if (typeof page === 'string') {
      root.innerHTML = page;
    } else {
      const content = page.getContent();

      if (content) {
        root.innerHTML = '';
        root.append(content);
        page.dispatchComponentDidMount();
      }
    }

  }
});
