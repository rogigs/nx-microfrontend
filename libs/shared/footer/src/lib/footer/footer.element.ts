import { JSXify } from '@nx-example/shared/jsxify';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'nx-example-footer': JSXify<FooterElement>;
    }
  }
}

export class FooterElement extends HTMLElement {
  connectedCallback() {
    console.log('FooterElement connected');
    this.appendChild(this.createContent());
  }

  private createContent() {
    // Wrapper
    const footer = document.createElement('footer');

    //father
    const section = document.createElement('section');
    footer.appendChild(section);

    //children
    const paragraph = document.createElement('p');
    paragraph.innerHTML = '&copy; 2024 Your Company. All rights reserved.';
    section.appendChild(paragraph);

    return footer;
  }
}

customElements.define('nx-example-footer', FooterElement);
