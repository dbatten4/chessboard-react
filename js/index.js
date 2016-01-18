var React    = require('react');
var ReactDOM = require('react-dom');
var Board    = require('./components/Board.react');
var observe  = require('./components/Game.react').observe;

observe(function(piecePosition) {
  ReactDOM.render(
    <Board piecePosition={piecePosition} />,
    document.getElementById('root')
  );
});
