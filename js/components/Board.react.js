var React  = require('react');
var Square = require('./Square.react');
var Piece  = require('./Piece.react');
var movePiece = require('./Game.react').movePiece;

var Board = React.createClass({

  renderSquare: function(i) {
    var x = i % 16;
    var y = Math.floor(i / 16);
    var pieceX = this.props.piecePosition[0];
    var pieceY = this.props.piecePosition[1];
    var piece  = (x === pieceX && y === pieceY) ? <Piece /> : null;

    return (
      <div key={i}
           style={{ width: '6.25%', height: '6.25%' }}
           onClick={this.handleSquareClick.bind(this, x, y)}>
        <Square>
          {piece}
        </Square>
      </div>
    );
  },

  handleSquareClick: function(targetX, targetY) {
    movePiece(targetX, targetY);
  },

  render: function() {
    var self = this;
    var squares = [];
    (function addSquare(index) {
      squares.push(self.renderSquare(index));
      index ++;
      if(index > 256) { return };
      addSquare(index);
    }(0));

    return (
      <div style={{
        width:    '100%',
        height:   '100%',
        display:  'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
});

module.exports = Board;
