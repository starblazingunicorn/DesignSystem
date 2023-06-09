import { newSpecPage } from '@stencil/core/testing';
import { BaseButton } from '../base-button';

describe('base-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BaseButton],
      html: `<base-button></base-button>`,
    });
    expect(page.root).toEqualHtml(`
      <base-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </base-button>
    `);
  });
});
