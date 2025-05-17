import { Module } from '../core/module';
import { random } from '../utils';

export class CustomMessageModule extends Module {
  constructor(text) {
    super('custom-message', text);
  }
  static createMessageElement(messageText) {
    const messageElement = document.createElement('div');

    const width = 200;
    const height = 50;

    const topPosition = random(0, window.innerHeight - height);
    const leftPosition = random(0, window.innerWidth - width);

    messageElement.textContent = messageText;
    messageElement.style.backgroundColor = '#E9967A';
    messageElement.style.borderRadius = '10px';
    messageElement.style.width = `${width}px`;
    messageElement.style.height = `${height}px`;
    messageElement.style.display = 'flex';
    messageElement.style.alignItems = 'center';
    messageElement.style.justifyContent = 'center';
    messageElement.style.position = 'absolute';
    messageElement.style.top = `${topPosition}px`;
    messageElement.style.left = `${leftPosition}px`;

    return messageElement;
  }
  trigger() {
    const messageHTML = CustomMessageModule.createMessageElement(
      'Это кастомное сообщение'
    );
    document.body.append(messageHTML);

    setTimeout(() => {
      messageHTML.remove();
    }, 1000);
  }
}
