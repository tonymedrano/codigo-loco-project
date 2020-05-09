import { newE2EPage } from '@stencil/core/testing';

describe('cl-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cl-modal></cl-modal>');

    const element = await page.find('cl-modal');
    expect(element).toHaveClass('hydrated');
  });
});
