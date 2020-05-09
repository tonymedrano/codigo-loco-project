import { newSpecPage } from '@stencil/core/testing';
import { ClFooter } from './cl-footer';

describe('cl-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClFooter],
      html: `<cl-footer></cl-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <cl-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cl-footer>
    `);
  });
});
