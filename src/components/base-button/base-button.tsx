import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'base-button',
  styleUrl: 'base-button.scss',
  shadow: true,
})
export class BaseButton {

  @Prop() bText: string;

  
  render() {
    return (
      <Host>
         <div>{this.bText}</div>
      </Host>
    );
  }

}
