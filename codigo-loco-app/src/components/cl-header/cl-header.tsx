import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cl-header',
  styleUrl: 'cl-header.css',
  shadow: true,
})
export class ClHeader {

  render() {
    return (
      <Host>
        <header>
          <h1>Stencil App Starter</h1>
        </header>
        <slot></slot>
      </Host>
    );
  }

}
