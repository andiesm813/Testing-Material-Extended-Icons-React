import { redirect } from 'react-router-dom';
import Page1 from './page1/page1';
import Page2 from './page2/page2';
import Page3 from './page3/page3';

export const routes = [
  { index: true, loader: () => redirect('page1') },
  { path: 'page1', element: <Page1 />, text: 'Page1' },
  { path: 'page2', element: <Page2 />, text: 'Page2' },
  { path: 'page3', element: <Page3 />, text: 'Page3' }
];
