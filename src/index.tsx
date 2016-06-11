/**
 * Created by mak on 6/8/16.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ReactReduxTsApp } from './index/ReactReduxTsApp';

const reactReduxTsAppHTMLElement: HTMLElement = document.getElementById('react-redux-ts-app');
let keywords = [
  'TypeScript',
  'React',
  'Redux'
];

ReactDOM.render(
  <ReactReduxTsApp keywords={keywords}/>,
  reactReduxTsAppHTMLElement
);
