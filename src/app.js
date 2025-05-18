import "./styles.css";
import { ContextMenu } from "./menu.js";
import { BackgroundModule } from "./modules/background.module.js";
import { ClearModule } from "./modules/clear.module.js";
import { CurrentDate } from "./modules/date.module.js";

// Заблокировать контекстное меню браузера
document.addEventListener(
  "contextmenu",
  function (cancel) {
    cancel.preventDefault();
  },
  false
);

const contextMenu = new ContextMenu(".menu");
const backgroundModule = new BackgroundModule("Изменить фон");
const clearModule = new ClearModule("Очистить экран");
const currentDate = new CurrentDate("Текущее время");

contextMenu.add(backgroundModule);
contextMenu.add(clearModule);
contextMenu.add(currentDate);

console.log("Контекстное меню успешно создано!");
