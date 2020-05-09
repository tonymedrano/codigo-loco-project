import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cl-main',
  styleUrl: 'cl-main.css',
  shadow: true,
})
export class ClMain {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
