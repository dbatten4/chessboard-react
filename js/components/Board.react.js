var React = require('react');
var Square = require('./Square.react');
var Piece  = require('./Piece.react');

var Board = React.createClass({

  render: function() {
    return (
      <div>
        <Square>
          <Piece />
        </Square>
      </div>
    );
  }

});

module.exports = Board;
