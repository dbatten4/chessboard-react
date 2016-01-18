var observer = null;
var piecePosition = [0,0];

function emitChange() {
  observer(piecePosition);
};

exports.observe = function(o) {
  observer = o;
  emitChange();
};

exports.movePiece = function(targetX, targetY) {
  piecePosition = [targetX, targetY];
  emitChange();
};
