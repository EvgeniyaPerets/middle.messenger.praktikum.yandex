import { MyLinkProps, MyLink } from './../../partials/link/Link';
import { MyInput, MyInputProps } from './../../partials/input/Input';
import { MyButton, MyButtonProps } from './../../partials/button/Button';
import Block from '../../utils/Block';
import temp from './login.tmlp';
import validator from '../../utils/Validator';

type ChangeableKeys = 'login' | 'password';

export interface LoginProps {
  title: string;
}

export class Login extends Block {
  public login = '';
  public password = '';

  constructor(props: LoginProps) {
    super({ ...props, events: { submit: (e: Event) => this.submitData(e) } }, 'div');
  }

  init() {
    this.children = {
      loginContext: new MyInput({
        placeholder: 'Логин',
        type: 'login',
        name: 'login',
        required: true,
        value: this.login,
        validateRule: validator.rules.login,
        events: {
          onChange: (event: any) => this.onChangeValue('login', event.target.value),
        },
      } as MyInputProps),
      passwordContext: new MyInput({
        placeholder: 'Пароль',
        type: 'password',
        required: true,
        value: this.password,
        validateRule: validator.rules.password,
        events: {
          onChange: (event) => this.onChangeValue('password', event.target.value),
        },
      } as MyInputProps),
      buttonContext: new MyButton({
        class: 'login_button',
        btn: 'Вход',
        type: 'submit',
      } as MyButtonProps),
      linkContext: new MyLink({
        text: 'Нет аккаунта?',
        link: '/',
      } as MyLinkProps),
    };
  }

  render() {
    return this.compile(temp, this.props);
  }

  public submitData(event: Event) {
    event.preventDefault();

    const dto = {
      login: this.login,
      password: this.password,
    };

    if (!this.validateAll()) {
      return;
    }

    console.log(dto);
  }

  private validateAll(): boolean {
    return Object.values(this.children).every(child => {
      if (child instanceof MyInput) {
        return child.validate();
      }

      return true;
    });
  }

  private onChangeValue(prop: ChangeableKeys, value: string) {
    this[prop] = value;
  }
}
