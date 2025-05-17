import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.el = document.querySelector(selector);

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
    // Закрываем меню при любом другом клике. Правый клик открывает новое меню, левый закрывает.
    window.addEventListener("mousedown", () => this.close());
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
    this.el.innerHTML += liElement; // Добавляем новый пункт меню
  }
}
