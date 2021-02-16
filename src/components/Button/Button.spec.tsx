import React from 'react';
import Button from './Button';
import ReactTestRenderer from 'react-test-renderer';

describe('Button component', () => {
  it('deve renderizar o Button component corretamente', () => {
    const title = 'Button test';
    ReactTestRenderer.create(<Button title={title} onPress={jest.fn} />);

    expect(title).toEqual('Button test');
  });
});
