import { BaseButton } from './base-button';

export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/BaseButton',
};
const Template = (args) => `<base-button b-text="buttons"></base-button>`;

export const Example = Template.bind({});
Example.args = {
  text: 'Im a button',
};

 