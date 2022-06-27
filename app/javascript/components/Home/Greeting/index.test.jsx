import React from 'react';
import { shallow } from 'enzyme';
import Greeting from '.';

describe('Greeting', () => {
  const props = {
    name: 'John Doe',
  };

  const output = shallow(<Greeting {...props} />);

  test('renders component', () => {
    expect(output).toMatchSnapshot();
  });
});
