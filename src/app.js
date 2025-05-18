import "./styles.css";
import { ContextMenu } from "./menu.js";
import { ShapeModule } from "./modules/shape.module.js";
import { BackgroundModule } from "./modules/background.module.js";
import { ClearModule } from "./modules/clear.module.js";
import { CurrentDate } from "./modules/date.module.js";
import { CustomMessageModule } from './modules/custom-message.module.js';
import { ClicksModule } from "./modules/clicks.module.js";

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
const currentDate = new CurrentDate("Текущее время");
const shapeModule = new ShapeModule("Создать фигуру");
const customMessageModule = new CustomMessageModule('Вызвать сообщение');
const clickFast = new ClicksModule("Считать клики (за 3 секунды)");
const clearModule = new ClearModule("Очистить экран");

contextMenu.add(backgroundModule);
contextMenu.add(currentDate);
contextMenu.add(shapeModule);
contextMenu.add(customMessageModule);
contextMenu.add(clickFast);
contextMenu.add(clearModule);

console.log("Контекстное меню успешно создано!");
