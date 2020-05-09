import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cl-footer',
  styleUrl: 'cl-footer.css',
  shadow: true,
})
export class ClFooter {

  render() {
    return (
      <Host>
        <footer>
          <p>Codigo Loco © 2020 by tonymedrano.dvlpr</p>
        </footer>
        <slot></slot>
      </Host>
    );
  }

}
