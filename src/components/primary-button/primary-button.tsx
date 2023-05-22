import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'primary-button',
  styleUrl: 'primary-button.css',
  shadow: true,
})
export class PrimaryButton {

  @Prop() name: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
