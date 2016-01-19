jest.dontMock('../js/components/Board.react.js');

describe('Board', function() {

  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var Board;

  beforeEach(function() {
    Board = require('../js/components/Board.react');
  });

  it('should exist', function() {
    var board = TestUtils.renderIntoDocument(<Board piecePosition={[0,0]} />);
    expect(TestUtils.isCompositeComponent(board)).toBeTruthy();
  });

});
