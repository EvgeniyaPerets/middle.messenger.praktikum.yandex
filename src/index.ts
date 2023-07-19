import Handlebars from 'handlebars';
import { Chats } from './pages/Chats';
import { ErrorPage } from './pages/ErrorPage';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { SettingsPassword } from './pages/SettingsPassword';
import { Settings } from './pages/SettingsProfile';
import { Signin } from './pages/Signin';
import start from './pages/start.tmlp';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');

  const getPage = () => {
    switch (window.location.pathname) {
      case '/login':
        return new Login({ title: 'Вход' });
      case '/500':
        return new ErrorPage({
          errorStatus: 500,
          errorText: 'Мы уже фиксим',
        });
      case '/404':
        return new ErrorPage({
          errorStatus: 404,
          errorText: 'Не туда попали',
        });
      case '/signin':
        return new Signin({ title: 'Регистрация' });
      case '/settings':
        return new Settings({ title: 'Изменить данные' });
      case '/profile':
        return new Profile({
          email: 'pochta@yandex.ru',
          login: 'ivanivanov',
          first_name: 'Иван',
          second_name: 'Иванов',
          display_name: 'Иван',
          phone: '+7 (909) 967 30 30',
        });
      case '/settings_password':
        return new SettingsPassword({ title: 'Изменить пароль' });
      case '/chats':
        return new Chats();
      case '/':
        return Handlebars.compile(start)({ text: 'all pages' });
      default:
        return new ErrorPage({
          errorStatus: 404,
          errorText: 'Не туда попали',
        });
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
