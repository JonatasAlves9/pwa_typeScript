var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html, customElement } from 'lit-element';
import './app-home';
import { Router } from '@vaadin/router';
import '../components/header';
let AppIndex = class AppIndex extends LitElement {
    static get styles() {
        return css `
      main {
        padding: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }
    
      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }
    
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
    
        to {
          opacity: 0;
        }
      }
    
      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }
    
        to {
          opacity: 1;
        }
      }
    `;
    }
    constructor() {
        super();
    }
    firstUpdated() {
        // this method is a lifecycle even in lit-element
        // for more info check out the lit-element docs https://lit-element.polymer-project.org/guide/lifecycle
        var _a;
        // For more info on using the @vaadin/router check here https://vaadin.com/router
        const router = new Router((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#routerOutlet'));
        router.setRoutes([
            // temporarily cast to any because of a Type bug with the router
            {
                path: "",
                animate: true,
                children: [
                    { path: '/', component: 'app-home' },
                    {
                        path: "/about",
                        component: "app-about",
                        action: async () => {
                            await import('./app-about.js');
                        },
                    }
                ]
            }
        ]);
    }
    render() {
        return html `
      <div>
        <app-header></app-header>
      
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `;
    }
};
AppIndex = __decorate([
    customElement('app-index')
], AppIndex);
export { AppIndex };
