import { Module } from "../core/module";
import { random } from "../utils";

export class CurrentDate extends Module {
  constructor(text) {
    super("date", text);
  }

  // Метод получения текущей даты и времени
  static currentDate() {
    const currentDate = new Date();
    return currentDate.toLocaleDateString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  // Генерация случайных координат
  generateRandomPosition() {
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Случайная позиция относительно размеров окна
    const x = random(0, windowWidth - 300);
    const y = random(0, windowHeight - 100);
    return { x, y };
  }

  createTimeContainer(dateStr) {
    const { x, y } = this.generateRandomPosition(); // Случайные координаты

    const container = document.createElement("div");
    container.className = "time-container";

    const content = document.createElement("h1");
    content.textContent = dateStr;
    content.className = "time-content";

    container.appendChild(content);
    document.body.appendChild(container);

    // Автоматическое удаление через 10 секунд
    const delay = random(1000, 10000);
    setTimeout(() => {
      container.parentNode.removeChild(container);
    }, delay);

    // Оформление контейнера
    container.style.cssText = [
      "position: absolute",
      "width: fit-content",
      "height: fit-content",
      "padding: 15px",
      "background-image: linear-gradient(to right bottom, #4CAF50, #3498DB)",
      "color: white",
      "border-radius: 10px",
      "box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3)",
      "z-index: 1000",
      "cursor: default",
      `top: ${y}px`,
      `left: ${x}px`,
    ].join(";");

    // Оформление текста
    content.style.cssText = [
      "font-family: Arial, sans-serif",
      "font-weight: bold",
      "font-size: 2rem",
      "line-height: 1.2",
      "text-align: center",
    ].join(";");
  }

  // Запуск события триггера
  trigger() {
    const dateStr = CurrentDate.currentDate();
    this.createTimeContainer(dateStr);
  }

  // Возвращаем разметку для меню
  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
