import { Module } from "../core/module";

export class ClearModule extends Module {
  constructor(text) {
    super("clear", text);
  }

  // перегружаем страницу
  trigger() {
    location.reload();
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
