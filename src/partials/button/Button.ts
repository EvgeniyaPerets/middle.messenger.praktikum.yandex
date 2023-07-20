import Block from '../../utils/Block';
import temp from './button.tmpl';

export interface MyButtonProps {
  type?: string;
  class?: string;
  btn: string;
  events?: { click?: (event: MouseEvent) => void; }
}

export class MyButton extends Block {
  constructor(props: MyButtonProps) {
    super(props, 'div');
  }

  render() {
    return this.compile(temp, this.props);
  }
}
