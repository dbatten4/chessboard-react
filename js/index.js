var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/Board.react');

ReactDOM.render(
  <Board piecePosition={[0,0]} />,
  document.getElementById('root')
);
