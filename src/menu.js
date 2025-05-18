import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.el = document.querySelector(selector);
    this.modules = []; // Массив хранимых модулей

    document.body.addEventListener("click", (event) => {
      if (event.target.offsetParent !== this.el) {
        this.close();
      }
    });

    // Обработчики событий
    window.addEventListener("contextmenu", (event) => {
      const x = event.clientX;
      const y = event.clientY;
      this.open(x, y);
    });

    this.el.addEventListener("click", (event) => {
      if (event.target.nodeName === "LI") {
        const type = event.target.dataset.type;
        const foundModule = this.modules.find((module) => module.type === type);
        if (foundModule) {
          foundModule.instance.trigger();
        }
      }
    });
  }

  open(x, y) {
    this.el.style.display = "block"; // Показываем меню
    this.el.style.left = `${x}px`; // координата X
    this.el.style.top = `${y}px`; // координата Y
  }

  close() {
    this.el.style.display = "none"; // Закрываем меню
  }

  add(module) {
    const liElement = module.toHTML(); // Получаем модуль
    const domLiElement = document.createElement("li"); // Создание DOM-элемент
    domLiElement.innerHTML = liElement;
    this.el.appendChild(domLiElement.firstElementChild);

    this.modules.push({ type: module.type, instance: module }); // Сохраняем модуль в массив
  }
}
