import { newE2EPage } from '@stencil/core/testing';

describe('base-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<base-avatar></base-avatar>');

    const element = await page.find('base-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
