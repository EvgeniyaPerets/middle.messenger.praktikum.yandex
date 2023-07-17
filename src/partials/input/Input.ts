import Block from '../../utils/Block';
import temp from './input.tmpl';
import validator, { Rule } from '../../utils/Validator';

export interface IEvent extends Event {
  target: HTMLInputElement;
}

export interface MyInputProps {
  type: string;
  name?: string;
  placeholder: string;
  value?: string;
  validateRule?: Rule
  errorMessage?: string;
  events?: {
    onChange?: (e: IEvent) => void;
    focus?: (e: IEvent) => void;
    blur?: (e: IEvent) => void;
    keydown?: (e: KeyboardEvent) => void;
  }
}

export class MyInput extends Block {
  public value = '';

  constructor(props: MyInputProps) {
    super(props, 'div');

    this.setProps({
      events: {
        ...props.events,
        input: this.onChange,
        focusout: this.validate,
      },
    });
  }

  render() {
    return this.compile(temp, this.props);
  }

  private onChange = (event: IEvent) => {
    this.value = event.target.value;

    if (this.props.events?.onChange) {
      this.props.events.onChange(event);
    }
  };

  public validate = () => {
    if (!this.props.validateRule) {
      return true;
    }

    const validatorData = validator.validate(this.props.validateRule, this.value);

    if (validatorData.valid) {
      this.setProps({ errorMessage: '', value: this.value });
      this.getContent().querySelector('input')?.classList.remove('input--error');
      return true;
    }

    this.setProps({ errorMessage: validatorData.msg, value: this.value });
    this.getContent().querySelector('input')?.classList.add('input--error');
    return false;
  };

  updatePropValue(name: string, newValue: any) {
    super.updatePropValue(name, newValue);

    if (name === 'value') {
      this.value = newValue;
    }
  }
}