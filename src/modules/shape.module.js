import {Module} from '../core/module'
import { random } from "../utils";

export class ShapeModule extends Module {
  constructor(text) {
    super('shape', text)
  }
  trigger() {
    const shapeHTML = document.createElement('div');

    // Задаем рандомный размер и цвет
    const shapeSize = random(60, 350)
    function shapeColor() {
        const colorPalette =["black", "red", "green", "blue", "yellow", "orange"];
        return colorPalette[random(0, colorPalette.length - 1)]
    }
    // Рандомная позиция фигуры
    const x = random(0, window.innerWidth - shapeSize);
    const y = random(0, window.innerHeight - shapeSize);

    // Назначаем стили
    shapeHTML.style.background = shapeColor();
    shapeHTML.style.width = `${shapeSize}px`;
    shapeHTML.style.height = `${shapeSize}px`;
    shapeHTML.style.position = 'absolute';
    shapeHTML.style.top = `${y}px`;
    shapeHTML.style.left =`${x}px`;
    shapeHTML.style.borderRadius = '20%';
    shapeHTML.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.3)';

    // Добавляем элемент в DOM
    document.body.append(shapeHTML);

  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}