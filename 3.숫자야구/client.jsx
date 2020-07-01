const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const NumberBaseBall = require('./NumberBaseBall-hook');

const Hot = hot(NumberBaseBall);

ReactDom.render(<Hot/>, document.querySelector('#root'));