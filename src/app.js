import "./styles.css";
import { ContextMenu } from "./menu.js";
import { ClicksModule } from "./modules/clicks.module.js";

// Заблокировать контекстное меню браузера
document.addEventListener(
  "contextmenu",
  function (cancel) {
    cancel.preventDefault();
  },
  false
);

const contextMenu = new ContextMenu(".menu"); // Создание нового экземпляра меню
const clickFast = new ClicksModule("Считать клики (за 3 секунды)"); // Создание нового экземпляра модуля

contextMenu.add(clickFast); // Добавляем модуль в меню
console.log("Контекстное меню успешно создано!");
