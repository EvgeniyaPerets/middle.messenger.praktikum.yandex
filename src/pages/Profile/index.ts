import Handlebars from 'handlebars';
import profile from './profile.tmpl';
import button from '../../partials/button/button.tmpl';
import link from '../../partials/link/link.tmpl';

Handlebars.registerPartial('button', button);
Handlebars.registerPartial('link', link);

export default Handlebars.compile(profile)({
  email: 'pochta@yandex.ru',
  login: 'ivanivanov',
  first_name: 'Иван',
  second_name: 'Иванов',
  display_name: 'Иван',
  phone: '+7 (909) 967 30 30',
  buttonContext: {
    class: 'prev_page',
    btn: 'Назад',
  },
  settingsProfileContext: {
    text: 'Изменить данные',
    link: '/settings',
  },
  settingsPasswordContext: {
    text: 'Изменить пароль',
    link: '/settings_password',
  },
  outContext: {
    text: 'Выйти',
    class: 'out_link',
    link: '/',
  },
});
