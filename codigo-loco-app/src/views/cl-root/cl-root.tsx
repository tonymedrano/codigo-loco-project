import { Component, h } from '@stencil/core';


@Component({
  tag: 'cl-root',
  styleUrl: 'cl-root.css',
  shadow: true
})
export class ClRoot {

  render() {
    return (
      <div>
        <cl-header></cl-header>
        <cl-main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='cl-home' exact={true} />
              <stencil-route url='/profile/:name' component='cl-profile' />
            </stencil-route-switch>
          </stencil-router>
        </cl-main>
        <cl-footer></cl-footer>
        <cl-modal title="Basic modal">
          Modal slot demo content.
        </cl-modal>
      </div>
    );
  }
}
