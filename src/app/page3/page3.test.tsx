import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Page3 from './page3';
import 'element-internals-polyfill';

test('renders Page3 component', () => {
  const wrapper = render(<Page3 />);
  expect(wrapper).toBeTruthy();
});