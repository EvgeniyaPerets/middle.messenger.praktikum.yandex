import { MyButton } from '../../partials/button/Button';
import { MyInput } from '../../partials/input/Input';
import Block from '../../utils/Block';
import settingsPassword from './settingsPassword.tmpl';
import validator from '../../utils/Validator';

export interface SettingsPasswordProps {
  title: string;
}

type ChangeableKeys = 'old_password' | 'new_password';

// export default Handlebars.compile(settingsProfile)({
//   title: 'Изменить пароль',
//   oldPasswordContext: {
//     placeholder: 'Старый пароль',
//     type: 'password',
//     name: 'oldPassword',
//   },
//   newPasswordContext: {
//     placeholder: 'Новый пароль',
//     type: 'password',
//     name: 'newPassword',
//   },
//   buttonContext: {
//     class: 'settings_profile_button',
//     btn: 'Сохранить',
//     type: 'submit',
//   },
// });

export class SettingsPassword extends Block {
  public old_password = '';
  public new_password = '';

  constructor(props: SettingsPasswordProps) {
    super({ ...props, events: { submit: (e: Event) => this.submitData(e) } });
  }

  init() {
    this.children = {
      old_password: new MyInput({
        placeholder: 'Старый пароль',
        type: 'password',
        name: 'oldPassword',
        required: true,
        value: this.old_password,
        validateRule: validator.rules.password,
        events: { onChange: event => this.onChangeValue('old_password', event.target.value) },
      }),
      new_password: new MyInput({
        placeholder: 'Новый пароль',
        type: 'password',
        name: 'newPassword',
        required: true,
        value: this.new_password,
        validateRule: {
          pattern: this.getSecondPasswordPattern,
          required: true,
          msg: 'Обязательное поле. Должно совпадать с паролем',
        },
        events: { onChange: event => this.onChangeValue('new_password', event.target.value) },
      }),
      button: new MyButton({
        class: 'settings_profile_button',
        btn: 'Сохранить',
        type: 'submit',
      }),
    };
  }

  render() {
    return this.compile(settingsPassword, this.props);
  }

  private onChangeValue(prop: ChangeableKeys, value: string) {
    this[prop] = value;
  }

  private getSecondPasswordPattern = () => {
    return `^${this.old_password}`;
  };

  private validateAll(): boolean {
    return Object.values(this.children).every(child => {
      if (child instanceof MyInput) {
        return child.validate();
      }
      return true;
    });
  }

  public submitData(e: Event) {
    e.preventDefault();

    const dto = {
      old_password: this.old_password,
      new_password: this.new_password,
    };

    if (!this.validateAll()) {
      return;
    }

    console.log(dto);
  }

}
