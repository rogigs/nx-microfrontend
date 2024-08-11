import { createRoot, Root } from 'react-dom/client';
import {
  DialogSubscribe as Component,
  mountPointCss,
} from './dialog-subscribe';

export class DialogSubscribe extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }
  mountPoint!: HTMLSpanElement;
  root!: Root;
  render() {
    if (!this.root) this.root = createRoot(this.mountPoint);
    this.root.render(<Component />);
  }
  connectedCallback() {
    this.mountPoint = document.createElement('span');
    this.appendChild(this.mountPoint);
    this.style.cssText = mountPointCss;

    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
}
customElements.define('nx-example-dialog-subscribe', DialogSubscribe);
