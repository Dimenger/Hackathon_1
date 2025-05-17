import { Menu } from "./core/menu";

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

    // Регистрируем обработчики событий
    window.addEventListener("contextmenu", (event) => {
      const x = event.clientX;
      const y = event.clientY;
      this.open(x, y);
    });
    // // Закрываем меню при любом другом клике. Правый клик открывает новое меню, левый закрывает.
    // window.addEventListener("mousedown", () => this.close());

    this.el.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        if (event.target.nodeName === "LI") {
          const type = event.target.dataset.type;
          const foundModule = this.modules.find(
            (module) => module.type === type
          );
          if (foundModule) {
            foundModule.instance.trigger();
          }
        }
      },
      false
    );
  }

  open(x, y) {
    this.el.style.display = "block"; // Показываем меню
    this.el.style.left = `${x}px`; // Устанавливаем координату X
    this.el.style.top = `${y}px`; // Устанавливаем координату Y
  }

  close() {
    this.el.style.display = "none"; // Скрываем меню
  }

  add(module) {
    const liElement = module.toHTML(); // Получаем HTML представление модуля
    const domLiElement = document.createElement("li"); // Создание реального DOM-элемента
    domLiElement.innerHTML = liElement; // Присваиваем созданный HTML
    this.el.appendChild(domLiElement.firstElementChild); // Добавляем новый пункт меню

    this.modules.push({ type: module.type, instance: module }); // Сохраняем модуль в виде объекта
  }
}
