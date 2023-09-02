import { Component, Host, Prop, h } from '@stencil/core';
import { AvatarVariation } from './base-avatar-variation.enum';
import { AvatarSize } from './base-avatar-size.enum';

@Component({
  tag: 'base-avatar',
  styleUrl: 'base-avatar.scss',
  shadow: true,
})
export class BaseAvatar {
  @Prop() bAllt: string;
  @Prop() bWidth: number;
  @Prop() bHeight: number;
  @Prop() bVariation: AvatarVariation = AvatarVariation.CIRCLE;
  @Prop() bSize: AvatarSize = AvatarSize.M;

  render() {
    return (
      <Host>
        <div>{this.bVariation}</div>
      </Host>
    );
  }
}
