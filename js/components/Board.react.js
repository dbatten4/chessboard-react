var React  = require('react');
var Square = require('./Square.react');
var movePiece = require('./Game.react').movePiece;

var Board  = React.createClass({

  renderSquare: function(i) {
    var x = i % 16;
    var y = Math.floor(i / 16);
    var pieceX = this.props.piecePosition[0];
    var pieceY = this.props.piecePosition[1];
    var piece  = (x === pieceX && y === pieceY) ?
      <div data-id={i}
           key={i}
           style={{
             backgroundColor: 'blue',
             width:  '100%',
             height: '100%'
           }}
           draggable="true">
      </div> :
      null;
    var colour = (x + y) % 2 === 1 ? 'black' : 'white';

    return (
      <div key={i}
           style={{ width: '6.25%', height: '6.25%', backgroundColor: colour }}
           onDragOver={this.dragOver}
           onDrop={this.drop.bind(this, x, y)}>
        <Square>
          {piece}
        </Square>
      </div>
    );
  },

  dragOver: function(e) {
    e.preventDefault();
    return false;
  },

  drop: function(targetX, targetY) {
    movePiece(targetX, targetY);
  },

  render: function() {
    var self = this;
    var squares = [];
    (function addSquare(index) {
      squares.push(self.renderSquare(index));
      index ++;
      if(index >= 256) { return };
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
