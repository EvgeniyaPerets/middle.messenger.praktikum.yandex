import { MyButton } from './../../partials/button/Button';
import { MyInput } from './../../partials/input/Input';
import chats from './chats.tmpl';
import { ChatItem } from './components/ChatItem';
import { Message } from './components/message';
import Block from '../../utils/Block';

const data = {
  chats: [],
};

export class Chats extends Block {
  constructor() {
    super({ ...data });
  }

  init() {
    const chats = [
      new ChatItem({
        name: 'Жека',
        msg: 'Убивать его будем?',
        date: '2022-12-26T10:36:23.291Z',
      }),
      new ChatItem({
        name: 'Hariton',
        msg: 'Да, вчера был',
        date: '2022-12-20T10:36:23.291Z',
      }),
    ];

    this.setProps({
      chats: chats.map(block => block.id),
    });

    this.children = {
      ...chats.reduce((acc: Record<string, Block>, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {}),
      input_search: new MyInput({
        type: 'text',
        name: 'search',
        value: '',
        placeholder: 'Поиск',
        required: false,
        events: { onChange: e => console.log(e.target.value) },
      }),
      profile_button: new MyButton({
        btn: 'Профиль',
        events: { click: () => (document.location.href = '/profile') },
      }),
      message: new Message({
        name: 'Щитигера',
      }),
    };
  }

  render() {
    return this.compile(chats, this.props);
  }
}
