import { newE2EPage } from '@stencil/core/testing';

describe('cl-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cl-header></cl-header>');

    const element = await page.find('cl-header');
    expect(element).toHaveClass('hydrated');
  });
});
