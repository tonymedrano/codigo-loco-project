import { newE2EPage } from '@stencil/core/testing';

describe('cl-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cl-footer></cl-footer>');

    const element = await page.find('cl-footer');
    expect(element).toHaveClass('hydrated');
  });
});
