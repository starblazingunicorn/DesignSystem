import { newE2EPage } from '@stencil/core/testing';

describe('base-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<base-button></base-button>');

    const element = await page.find('base-button');
    expect(element).toHaveClass('hydrated');
  });
});
