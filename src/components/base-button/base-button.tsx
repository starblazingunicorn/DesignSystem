import { Component, Host, Prop, h } from '@stencil/core';
import { BaseButtonVariation } from './base-button-variants';

@Component({
  tag: 'base-button',
  styleUrl: 'base-button.scss',
  shadow: true,
})
export class BaseButton {
  @Prop() bText: string;
  @Prop() ariaLabel: string;
  @Prop() bVariation: `${BaseButtonVariation}` = BaseButtonVariation.Secondary;
 
  get cssModifier(){
    return [`base-button--variation-${this.bVariation}`];
  };

 

  render() {
    return (
      <Host>
        <div>
          <button 
            class="button" 
            aria-label={this.ariaLabel} 
            role="button" 
            type={this.bVariation}>
            {this.bText}
          </button>
        </div>
      </Host>
    );
  }
}
