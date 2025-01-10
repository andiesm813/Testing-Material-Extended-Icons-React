import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Page1 from './page1';
import 'element-internals-polyfill';

test('renders Page1 component', () => {
  const wrapper = render(<Page1 />);
  expect(wrapper).toBeTruthy();
});