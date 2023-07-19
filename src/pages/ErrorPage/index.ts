import { MyLink } from './../../partials/link/Link';
import error from './error.tmpl';
import Block from '../../utils/Block';

export interface ErrorProps {
  errorStatus: number;
  errorText: string;
}

export class ErrorPage extends Block {
  constructor(props: ErrorProps) {
    super({ ...props } );
  }

  init() {
    this.children = {
      link: new MyLink({
        link: '/',
        text: 'Назад к чатам',
      }),
    };
  }

  render() {
    return this.compile(error, this.props);
  }
}
