import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('eos-alert')
export class EosAlertComponent extends LitElement {
  @property({ type: String })
  type = '';

  @property({ type: String })
  scope = '';

  @property({ type: String })
  title = '';

  @property({ type: Object })
  icon = {};

  constructor() {
    super();
    this.type = this.type;
    this.scope = this.scope;
    this.title = this.title;
    this.icon = {
      success: 'check_circle',
      info: 'info',
      warning: 'warning',
      danger: 'error',
    };
  }

  static get styles() {
    return css`
      :host {
        width: 100%;
        position: relative;
      }

      /* ==== General==== */
      .alert {
        border-left: 5px solid;
        display: flex;
        margin-bottom: 20px;
        margin: 16px;
        padding: 8px;
        width: 100%;
      }

      .alert .alert-body {
        width: 100%;
      }

      .alert .alert-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      p {
        margin: 0;
        font-size: 14px;
      }

      .alert-close {
        cursor: pointer;
      }

      .alert-title {
        font-weight: bold;
      }

      /* ==== Global ==== */
      .global {
        align-items: center;
        border: 0;
        color: #ffffff;
        height: 37px;
        left: 0;
        margin: 0 0 4px 0;
        padding: 0 16px;
        position: relative;
        top: 0;
        width: 99%;
        z-index: 1040;
      }

      .global.warning {
        background-color: var(--warning-500);
      }
      .global.info {
        background-color: var(--info-500);
      }
      .global.danger {
        background-color: var(--error-500);
      }
      .global.success {
        background-color: var(--success-500);
      }

      /* ==== Section and Inline ==== */
      .section .alert-body,
      .inline .alert-body {
        display: flex;
        flex-direction: column;
      }

      .section.success,
      .inline.success {
        background-color: var(--success-50);
        border-color: var(--success-600);
      }

      .section.warning,
      .inline.warning {
        background-color: var(--warning-50);
        border-color: var(--warning-600);
      }

      .section.info,
      .inline.info {
        background-color: var(--info-50);
        border-color: var(--info-600);
      }

      .section.danger,
      .inline.danger {
        background-color: var(--error-50);
        border-color: var(--error-600);
      }

      /* ==== Icons inside alerts color ==== */
      .success .alert-icon {
        color: var(--success-600);
      }

      .warning .alert-icon {
        color: var(--warning-600);
      }

      .info .alert-icon {
        color: var(--info-600);
      }

      .danger .alert-icon {
        color: var(--error-600);
      }

      .global .alert-icon {
        color: #fff;
      }

      /* ==== Helpers ==== */
      .hide {
        display: none;
      }

      .md-18 {
        font-size: 18px;
      }

      .eos-icons {
        margin-right: 8px;
        vertical-align: bottom;
      }
    `;
  }

  closeAlert() {
    this.remove();
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/eos-icons/dist/extended/css/eos-icons-extended.css"
      />

      <div class="alert ${this.type} ${this.scope}">
        <i class="alert-icon eos-icons md-18">${this.icon[this.type]}</i>
        <div class="alert-body">
          <div class="alert-title ${this.title || 'hide'}">${this.title}</div>
          <p><slot /></p>
        </div>
        <div class="alert-close" @click="${this.closeAlert}">
          <i class="eos-icons ${this.type === 'danger' ? 'hide' : ''} md-18"
            >close</i
          >
        </div>
      </div>
    `;
  }
}
