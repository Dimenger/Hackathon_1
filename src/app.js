import "./styles.css";
import { ContextMenu } from "./menu.js";
import { BackgroundModule } from "./modules/background.module.js";

// Заблокировать контекстное меню браузера
document.addEventListener(
  "contextmenu",
  function (cancel) {
    cancel.preventDefault();
  },
  false
);

const contextMenu = new ContextMenu(".menu"); // Создание нового экземпляра меню
const backgroundModule = new BackgroundModule("Изменить фон"); // Создание нового экземпляра модуля

contextMenu.add(backgroundModule); // Добавляем модуль в меню
console.log("Контекстное меню успешно создано!");
