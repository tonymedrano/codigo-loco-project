import { newE2EPage } from '@stencil/core/testing';

describe('cl-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cl-home></cl-home>');

    const element = await page.find('cl-home');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<cl-home></cl-home>');

    const element = await page.find('cl-home >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});
