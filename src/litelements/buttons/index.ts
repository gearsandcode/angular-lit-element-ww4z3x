import { LitElement, html, css, customElement, property } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined.js';

@customElement('rfln-button')
export class RflnButtonComponent extends LitElement {
  @property({ type: String })
  type = 'primary';
  @property({ type: Boolean })
  disabled = false;
  @property({ type: String })
  arialabel = undefined;

  constructor() {
    super();
    this.type = this.type;
  }

  static get styles() {
    return css`
      @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
      button {
        border-radius: 4px;
        border-width: 1px;
        border-color: transparent;
        background-color: var(--primary-700);
        color: var(--common-white);
        font-size: 1rem;
        font-family: "Oswald", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0.75rem 1rem;
        cursor: pointer;
      }

      button:hover {
        background-color: var(--primary-600);
      }
      button:focus {
        background-color: var(--primary-600);
      }

      button:disabled {
        background-color: var(--primary-400);
        cursor: not-allowed;
      }

      button:disabled:hover {
        background-color: var(--primary-400);
      }

      button.secondary {
        border-color: var(--primary-700);
        color: var(--primary-700);
        background-color: var(--common-white);
      }

      button.secondary:hover {
        background-color: var(--neutral-100);
      }

      button.secondary:focus {
        background-color: var(--neutral-100);
      }

      button.secondary:disabled {
        background-color: var(--common-white);
        color: var(--primary-400);
        border-color: var(--primary-400);
        cursor: not-allowed;
      }

      button.secondary:disabled:hover {
        background-color: var(--common-white);
      }

      button.plain {
        background-color: transparent;
        border-width: 2px;
        border-color: transparent;
        color: var(--primary-700);
        padding: 0.5rem 0.75rem;
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        text-decoration: underline;
        text-transform: none;
      }

      button.plain:hover {
        background-color: transparent;
        color: var(--primary-800);
      }
      button.plain:focus {
        padding: 0.5rem 0.75rem;
        background-color: transparent;
        border-width: 2px;
        border-color: var(--primary-800);
        color: var(--primary-800);
      }

      button.plain:disabled {
        color: var(--primary-400);
        cursor: not-allowed;
      }

      button.plain:disabled:hover {
        color: var(--primary-400);
      }

      button.destructive {
        background-color: var(--error-700);
        color: var(--common-white);
      }

      button.destructive:hover {
        background-color: var(--error-600);
      }
      button.destructive:focus {
        background-color: var(--error-600);
      }

      button.destructive:disabled {
        background-color: var(--error-400);
        color: var(--common-white);
        cursor: not-allowed;
      }

      button.destructive:disabled:hover {
        background-color: var(--error-400);
      }
    `;
  }

  render() {
    return html`
      <button
        class="${this.type}"
        ?disabled="${this.disabled}"
        aria-label="${ifDefined(this.arialabel ? this.arialabel : undefined)}"
      >
        <slot />
      </button>
    `;
  }
}
