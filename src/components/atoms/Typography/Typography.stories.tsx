import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography as Typographic } from '.';

interface Props {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'baseRegular'
    | 'baseMedium'
    | 'smallRegular'
    | 'smallMedium'
    | 'smallLink'
    | 'smallBold'
    | 'extraSmallRegular'
    | 'extraSmallMedium';
  color: string;
  children?: string | number;
}

const Typographies = () => {
  return (
    <>
      <Typographic variant="h1">Heading 1</Typographic>
      <Typographic variant="h2">Heading 2</Typographic>
      <Typographic variant="h3">Heading 3</Typographic>
      <Typographic variant="h4">Heading 4</Typographic>
      <Typographic variant="h5">Heading 5</Typographic>
      <Typographic variant="baseRegular">Base</Typographic>
      <Typographic variant="baseMedium">Base</Typographic>
      <Typographic variant="smallRegular">Small</Typographic>
      <Typographic variant="smallMedium">Small</Typographic>
      <Typographic variant="smallLink">Small-Link</Typographic>
      <Typographic variant="smallBold">Small</Typographic>
      <Typographic variant="extraSmallRegular">Extra small</Typographic>
      <Typographic variant="extraSmallMedium">Extra small</Typographic>
    </>
  );
};

export default {
  title: 'Example/Typography',
  component: Typographies,
  argTypes: {
    props: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'baseRegular',
        'baseMedium',
        'smallRegular',
        'smallMedium',
        'smallLink',
        'smallBold',
        'extraSmallRegular',
        'extraSmallMedium'
      ],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Typographies>;

const Template: ComponentStory<typeof Typographies> = () => <Typographies />;

export const Typography = Template.bind({});
