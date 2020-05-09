import { newE2EPage } from '@stencil/core/testing';

describe('cl-main', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cl-main></cl-main>');

    const element = await page.find('cl-main');
    expect(element).toHaveClass('hydrated');
  });
});
