type FunType = (...args: any[]) => void;

class EventBus {
  private readonly listeners: { [key: string]: FunType[] };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callBack: FunType) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callBack);
  }

  off(event: string, callBack: FunType) {
    if (!this.listeners[event]) {
      throw new Error(`нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(listener => listener !== callBack );
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      throw new Error(`нет события: ${event}`);
    }

    this.listeners[event].forEach(listener => {
      listener(...args);
    });
  }
}

export default EventBus;
