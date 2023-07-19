import { MyButton } from './../../../../partials/button/Button';
import { MyInput } from './../../../../partials/input/Input';
import message from './message.tmpl';
import Block from '../../../../utils/Block';

interface MessageProps {
  name: string;
}

export class Message extends Block {
  public messageToSend = '';

  constructor(props: MessageProps) {
    super({ ...props });
  }

  init() {
    this.children = {
      more_button: new MyButton({
        btn: '⋮',
      }),
      message_input: new MyInput({
        type: 'text',
        name: 'search',
        value: '',
        placeholder: 'Сообщение',
        validateRule: {
          pattern: '',
          msg: '',
          required: true,
        },
        events: {
          onChange: e => (this.messageToSend = e.target.value),
          keydown: this.onKeyDown,
        },
      }),
      send_button: new MyButton({
        btn: '→',
        events: { click: () => this.submit() },
      }),
    };
  }

  render() {
    return this.compile(message, this.props);
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') {
      return;
    }

    this.submit();
  };

  private validateAll(): boolean {
    return Object.values(this.children).every(child => {
      if (child instanceof MyInput) {
        return child.validate();
      }

      return true;
    });
  }

  public submit() {
    const dto = {
      message: this.messageToSend,
    };

    if (!this.validateAll()) {
      return;
    }

    console.log(dto);
    this.messageToSend = '';
    this.children.message_input.updatePropValue('value', '');
  }
}
