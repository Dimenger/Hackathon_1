import {Module} from '../core/module'
import { random } from "../utils";

export class ShapeModule extends Module {
  constructor(text) {
    super('shape', text)
  }

    // Создаем рандомный цвет
    static getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
        color += letters[random(0, 15)];
        }
        return color;
    }


  trigger() {
    const shapeHTML = document.createElement('div');

    // Задаем рандомный размер фигуры
    const shapeSize1 = random(60, 350) // ширина
    const shapeSize2 = random(60, 350) // высота

    // Создаем фигуры
    const shapes = [
        {
            name: 'square',
            shapeStyle: (div)=> {
            div.style.background = ShapeModule.getRandomColor();
            div.style.width = `${shapeSize1}px`;
            div.style.height = `${shapeSize1}px`;
            }
        },
       {
            name: 'circle',
            shapeStyle: (div)=> {
            div.style.background = ShapeModule.getRandomColor();
            div.style.width = `${shapeSize1}px`;
            div.style.height = `${shapeSize1}px`;
            div.style.borderRadius = "50%";
            }
        },
        {
            name: 'rectangle',
            shapeStyle: (div)=> {
            div.style.background = ShapeModule.getRandomColor();
            div.style.width = `${shapeSize1}px`;
            div.style.height = `${shapeSize2}px`;
            }
        },
        {
            name: 'oval',
            shapeStyle: (div)=> {
            div.style.background = ShapeModule.getRandomColor();
            div.style.width = `${shapeSize1}px`;
            div.style.height = `${shapeSize2}px`;
            div.style.borderRadius = "50%";
            }
        },

    ];

    

    // Рандомная позиция фигуры на странице
    const x = random(0, window.innerWidth - shapeSize1);
    const y = random(0, window.innerHeight - shapeSize1);

    // Назначаем общие стили
    shapeHTML.style.position = 'absolute';
    shapeHTML.style.top = `${y}px`;
    shapeHTML.style.left =`${x}px`;
    shapeHTML.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.3)';

    // Вибираем рандомную фигуру
    const shape = shapes[random(0, shapes.length -1)];

    // Применяем стили к фигуре 
    shape.shapeStyle(shapeHTML);

    // Добавляем фигуру в DOM
    document.body.append(shapeHTML);

  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}