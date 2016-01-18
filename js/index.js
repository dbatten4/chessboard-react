var React = require('react');
var ReactDOM = require('react-dom');
var Piece = require('./components/Piece.react');
var Square = require('./components/Square.react');

ReactDOM.render(
  <Square>
    <Piece />
  </Square>,
  document.getElementById('root')
);
