import { MyButton } from './../../partials/button/Button';
import { MyInput } from './../../partials/input/Input';
import Block from '../../utils/Block';
import settingsProfile from './settingsProfile.tmpl';
import validator from '../../utils/Validator';

export interface SettingsProps {
  title: string;
}

type ChangeableKeys =
  | 'email'
  | 'login'
  | 'first_name'
  | 'second_name'
  | 'display_name'
  | 'phone';

export class Settings extends Block {
  public email = '';
  public login = '';
  public first_name = '';
  public second_name = '';
  public display_name = '';
  public phone = '';

  constructor(props: SettingsProps) {
    super({ ...props, events: { submit: (e: Event) => this.submitData(e) } }, 'div');
  }

  init() {
    this.email = 'pochta@yandex.ru';
    this.login = 'ivanivanov';
    this.first_name = 'Иван';
    this.second_name = 'Иванов';
    this.display_name = 'Иван';
    this.phone = '+7(909)9673030';

    this.children = {
      email: new MyInput({
        placeholder: 'Почта',
        type: 'email',
        name: 'email',
        required: true,
        value: this.email,
        validateRule: validator.rules.email,
        events: { onChange: event => this.onChangeValue('email', event.target.value) },
      }),
      login: new MyInput({
        placeholder: 'Логин',
        type: 'login',
        name: 'login',
        required: true,
        value: this.login,
        validateRule: validator.rules.login,
        events: { onChange: event => this.onChangeValue('login', event.target.value) },
      }),
      first_name: new MyInput({
        placeholder: 'Имя',
        type: 'text',
        name: 'first_name',
        required: true,
        value: this.first_name,
        validateRule: validator.rules.name,
        events: { onChange: event => this.onChangeValue('first_name', event.target.value) },
      }),
      second_name: new MyInput({
        placeholder: 'Фамилия',
        type: 'text',
        name: 'second_name',
        required: true,
        value: this.second_name,
        validateRule: validator.rules.name,
        events: { onChange: event => this.onChangeValue('second_name', event.target.value) },
      }),
      display_name: new MyInput({
        placeholder: 'Имя в чате',
        type: 'text',
        name: 'display_name',
        required: true,
        value: this.display_name,
        validateRule: validator.rules.name,
        events: { onChange: event => this.onChangeValue('second_name', event.target.value) },
      }),
      phone: new MyInput({
        placeholder: 'Телефон',
        type: 'text',
        name: 'phone',
        required: true,
        value: this.phone,
        validateRule: validator.rules.phone,
        events: { onChange: event => this.onChangeValue('phone', event.target.value) },
      }),
      button: new MyButton({
        class: 'settings_profile_button',
        btn: 'Сохранить',
        type: 'submit',
      }),
    };
  }

  render() {
    return this.compile(settingsProfile, this.props);
  }

  private onChangeValue(prop: ChangeableKeys, value: string) {
    this[prop] = value;
  }

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
      email: this.email,
      login: this.login,
      first_name: this.first_name,
      second_name: this.second_name,
      phone: this.phone,
    };

    if (!this.validateAll()) {
      return;
    }

    console.log(dto);
  }

}

