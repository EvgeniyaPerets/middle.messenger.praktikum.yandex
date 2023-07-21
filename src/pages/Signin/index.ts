import { MyLink } from './../../partials/link/Link';
import { MyButton } from './../../partials/button/Button';
import { MyInput } from './../../partials/input/Input';
import Block from '../../utils/Block';
import signin from './signin.tmlp';
import validator from '../../utils/Validator';

export interface SigninProps {
  title: string;
}

type ChangeableKeys =
  | 'email'
  | 'login'
  | 'first_name'
  | 'second_name'
  | 'phone'
  | 'password'
  | 'second_password';

export class Signin extends Block {
  public email = '';
  public login = '';
  public first_name = '';
  public second_name = '';
  public phone = '';
  public password = '';
  public second_password = '';

  constructor(props: SigninProps) {
    super({ ...props, events: { submit: (e: Event) => this.submitData(e) } }, 'div');
  }

  init() {
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
      phone: new MyInput({
        placeholder: 'Телефон',
        type: 'text',
        name: 'phone',
        required: true,
        value: this.phone,
        validateRule: validator.rules.phone,
        events: { onChange: event => this.onChangeValue('phone', event.target.value) },
      }),
      password: new MyInput({
        placeholder: 'Пароль',
        type: 'password',
        name: 'password',
        required: true,
        value: this.password,
        validateRule: validator.rules.password,
        events: { onChange: event => this.onChangeValue('password', event.target.value) },
      }),
      second_password: new MyInput({
        placeholder: 'Пароль (ещё раз)',
        type: 'password',
        name: 'second_password',
        required: true,
        value: this.second_password,
        validateRule: {
          pattern: this.getSecondPasswordPattern,
          required: true,
          msg: 'Обязательное поле. Должно совпадать с паролем',
        },
        events: { onChange: event => this.onChangeValue('second_password', event.target.value) },
      }),
      button: new MyButton({
        class: 'signin_button',
        btn: 'Зарегистрироваться',
        type: 'submit',
      }),
      link: new MyLink({
        text: 'Вход',
        link: '/',
      }),
    };
  }

  render() {
    return this.compile(signin, this.props);
  }

  private onChangeValue(prop: ChangeableKeys, value: string) {
    this[prop] = value;
  }

  private getSecondPasswordPattern = () => {
    return `^${this.password}`;
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
      email: this.email,
      login: this.login,
      first_name: this.first_name,
      second_name: this.second_name,
      phone: this.phone,
      password: this.password,
      second_password: this.second_password,
    };

    if (!this.validateAll()) {
      return;
    }

    console.log(dto);
  }

}
