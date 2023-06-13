import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'base-button',
  styleUrl: 'base-button.scss',
  shadow: true,
})
export class BaseButton {
  @Prop() bText: string;
  @Prop() ariaLabel: string;
  render() {
    return (
      <Host>
        <div>
          <button type="submit" class="button" aria-label={this.ariaLabel}>
            {this.bText}
          </button>
        </div>
      </Host>
    );
  }
}
