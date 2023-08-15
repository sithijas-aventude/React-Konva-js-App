import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '..';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'base', 'lg', 'xl'],
      control: { type: 'radio' }
    },
    icon: {
      options: [
        'ri-home-7-fill',
        'ri-store-2-line',
        'ri-mail-add-line',
        'ri-inbox-unarchive-fill'
      ],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button text',
  disabled: false,
  iconRightAlign: false,
  dropDown: false
};

export const White = Template.bind({});
White.args = {
  type: 'white',
  label: 'Button text',
  disabled: false,
  iconRightAlign: false,
  dropDown: false
};

export const Red = Template.bind({});
Red.args = {
  type: 'red',
  label: 'Button text',
  disabled: false,
  iconRightAlign: false,
  dropDown: false
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  icon: 'ri-home-7-fill',
  disabled: false,
  iconRightAlign: false,
  dropDown: false
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
  label: 'Button text',
  disabled: false,
  iconRightAlign: false,
  dropDown: false
};

export const Icon = Template.bind({});
Icon.args = {
  type: 'icon',
  icon: 'ri-home-7-fill',
  disabled: false,
  iconRightAlign: false,
  dropDown: false
};

export const LinkWithIcon = Template.bind({});
LinkWithIcon.args = {
  type: 'icon-link',
  icon: 'ri-home-7-fill',
  label: 'Button text',
  disabled: false,
  iconRightAlign: false,
  dropDown: false
};
