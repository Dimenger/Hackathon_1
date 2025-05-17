import './styles.css';
import { ContextMenu } from './menu.js';
import { CustomMessageModule } from './modules/custom-message.module.js';

// Заблокировать контекстное меню браузера
document.addEventListener(
  'contextmenu',
  function (cancel) {
    cancel.preventDefault();
  },
  false
);

const contextMenu = new ContextMenu('.menu'); // Создание нового экземпляра меню
const customMessageModule = new CustomMessageModule('Вызвать сообщение'); // Создание нового экземпляра модуля

contextMenu.add(customMessageModule); // Добавляем модуль в меню
console.log('Контекстное меню успешно создано!');
