import { newSpecPage } from '@stencil/core/testing';
import { BaseAvatar } from '../base-avatar';

describe('base-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BaseAvatar],
      html: `<base-avatar></base-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <base-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </base-avatar>
    `);
  });
});
