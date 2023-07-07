import Handlebars from 'handlebars';
import login from './login.tmlp';
import button from '../../partials/button/button.tmpl';
import input from '../../partials/input/input.tmpl';
import link from '../../partials/link/link.tmpl';

Handlebars.registerPartial('button', button);
Handlebars.registerPartial('input', input);
Handlebars.registerPartial('link', link);

export default Handlebars.compile(login)({
  title: 'Вход',
  loginContext: {
    placeholder: 'Логин',
    type: 'login',
    name: 'login',
  },
  passwordContext: {
    placeholder: 'Пароль',
    type: 'password',
  },
  buttonContext: {
    class: 'login_button',
    btn: 'Вход',
    type: 'submit',
  },
  linkContext: {
    text: 'Нет аккаунта?',
    link: '/',
  },
});
