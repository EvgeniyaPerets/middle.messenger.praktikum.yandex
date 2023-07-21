import { MyButton } from './../../partials/button/Button';
import { MyLink } from './../../partials/link/Link';
import Block from '../../utils/Block';
import profile from './profile.tmpl';

export interface ProfileProps {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
}

export class Profile extends Block {
  constructor(props: ProfileProps) {
    super({ ...props });
  }

  init() {
    this.children = {
      button: new MyButton({
        class: 'prev_page',
        btn: 'Назад',
        events: { click: () => document.location.href = '/' },
      }),
      settings_profile: new MyLink({
        text: 'Изменить данные',
        link: '/settings',
      }),
      settings_password: new MyLink({
        text: 'Изменить пароль',
        link: '/settings_password',
      }),
      out: new MyLink({
        text: 'Выйти',
        class: 'out_link',
        link: '/',
      }),
    };
  }

  render() {
    return this.compile(profile, this.props);
  }
}
