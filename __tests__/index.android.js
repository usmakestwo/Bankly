import 'react-native';
import React from 'react';
import Bankly from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Bankly />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
