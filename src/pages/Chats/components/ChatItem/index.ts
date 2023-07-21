import Block from '../../../../utils/Block';
import formatDate from '../../../../utils/formatDate';
import chat from './chat.tmpl';

export interface IChatItemProps {
  name: string;
  msg: string;
  date: string;
}

function cutMessage(msg: string): string {
  return msg.slice(0, 55) + (msg.length > 50 ? '...' : '');
}

export class ChatItem extends Block {
  constructor(props: IChatItemProps) {
    super({
      ...props,
      date: formatDate(props.date),
      msg: cutMessage(props.msg),
    });
  }

  render() {
    return this.compile(chat, this.props);
  }
}
