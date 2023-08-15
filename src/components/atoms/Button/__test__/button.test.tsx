import { Button } from '../index';
import renderer from 'react-test-renderer';

it('renders Button', () => {
  const tree = renderer
    .create(<Button label="Button" icon="ri-admin-line" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Button - dropDown', () => {
  const tree = renderer
    .create(<Button label="Button text" dropDown />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Button - Secondary', () => {
  const tree = renderer
    .create(<Button label="Secondary" type="red" icon="ri-admin-line" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
