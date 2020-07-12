const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

import MineForm from './MineForm';

const Hot = hot(MineForm);

ReactDom.render(<Hot/>, document.querySelector('#root'));