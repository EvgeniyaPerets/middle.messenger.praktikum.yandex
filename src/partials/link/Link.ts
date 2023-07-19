import Block from '../../utils/Block';
import temp from './link.tmpl';

export interface MyLinkProps {
  text: string;
  link: string;
  class?: string;
}

export class MyLink extends Block {
  constructor(props: MyLinkProps) {
    super(props, 'div');
  }

  render() {
    return this.compile(temp, this.props);
  }
}