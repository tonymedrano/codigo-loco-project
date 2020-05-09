import { newE2EPage } from '@stencil/core/testing';

describe('cl-root', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('cl-root');
    expect(element).toHaveClass('hydrated');
  });

  it('renders the title', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('cl-root >>> h1');
    expect(element.textContent).toEqual('Stencil App Starter');
  });
});
