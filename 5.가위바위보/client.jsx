const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

import RSP from './RSP-hook';

const Hot = hot(RSP);

ReactDom.render(<Hot/>, document.querySelector('#root'));