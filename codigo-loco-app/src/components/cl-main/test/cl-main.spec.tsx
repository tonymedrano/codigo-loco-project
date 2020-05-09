import { newSpecPage } from '@stencil/core/testing';
import { ClMain } from './cl-main';

describe('cl-main', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClMain],
      html: `<cl-main></cl-main>`,
    });
    expect(page.root).toEqualHtml(`
      <cl-main>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cl-main>
    `);
  });
});
