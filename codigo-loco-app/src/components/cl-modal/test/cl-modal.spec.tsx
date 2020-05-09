import { newSpecPage } from '@stencil/core/testing';
import { ClModal } from './cl-modal';

describe('cl-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClModal],
      html: `<cl-modal></cl-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <cl-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cl-modal>
    `);
  });
});
