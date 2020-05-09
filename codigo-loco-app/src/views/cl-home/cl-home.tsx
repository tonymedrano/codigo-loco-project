import { Component, h } from '@stencil/core';

@Component({
  tag: 'cl-home',
  styleUrl: 'cl-home.css',
  shadow: true
})
export class ClHome {

  render() {
    return (
      <div class='cl-home'>
        <p>
          316 - Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>
        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
