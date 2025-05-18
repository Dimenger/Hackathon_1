import { Module } from "../core/module";
import { random } from "../utils"; // Рандомное число

export class BackgroundModule extends Module {
  constructor(text) {
    super("background", text);
  }
  // Рандомный цвет
  static getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[random(0, 15)];
    }
    return color;
  }

  // Меняет фон страницы на случайный
  trigger() {
    const randomColor = BackgroundModule.getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
