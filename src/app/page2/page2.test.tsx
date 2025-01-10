import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Page2 from './page2';
import 'element-internals-polyfill';

test('renders Page2 component', () => {
  const wrapper = render(<Page2 />);
  expect(wrapper).toBeTruthy();
});