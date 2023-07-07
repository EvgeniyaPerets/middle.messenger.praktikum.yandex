import Handlebars from 'handlebars';
import settingsProfile from './settingsPassword.tmpl';
import button from '../../partials/button/button.tmpl';
import input from '../../partials/input/input.tmpl';

Handlebars.registerPartial('button', button);
Handlebars.registerPartial('input', input);

export default Handlebars.compile(settingsProfile)({
  title: 'Изменить пароль',
  oldPasswordContext: {
    placeholder: 'Старый пароль',
    type: 'password',
    name: 'oldPassword',
  },
  newPasswordContext: {
    placeholder: 'Новый пароль',
    type: 'password',
    name: 'newPassword',
  },
  buttonContext: {
    class: 'settings_profile_button',
    btn: 'Сохранить',
    type: 'submit',
  },
});
