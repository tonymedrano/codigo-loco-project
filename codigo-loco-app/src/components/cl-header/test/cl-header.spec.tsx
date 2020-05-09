import { newSpecPage } from '@stencil/core/testing';
import { ClHeader } from './cl-header';

describe('cl-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClHeader],
      html: `<cl-header></cl-header>`,
    });
    expect(page.root).toEqualHtml(`
      <cl-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cl-header>
    `);
  });
});
