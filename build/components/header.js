var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html, customElement, property } from 'lit-element';
let AppHeader = class AppHeader extends LitElement {
    constructor() {
        super();
        this.title = 'PWA Starter';
    }
    static get styles() {
        return css `
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav {
        width: 9em;
        display: flex;
        justify-content: space-between;
      }

      nav fast-anchor {
        margin-left: 10px;
      }
    `;
    }
    render() {
        return html `
      <header>
        <h1>${this.title}</h1>

        <nav>
          <fast-anchor href="./" appearance="button">Home</fast-anchor>
          <fast-anchor href="./about" appearance="button">About</fast-anchor>
        </nav>
      </header>
    `;
    }
};
__decorate([
    property({ type: String })
], AppHeader.prototype, "title", void 0);
AppHeader = __decorate([
    customElement('app-header')
], AppHeader);
export { AppHeader };
