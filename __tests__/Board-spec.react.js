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

  it('should render a div', function() {
    var result = shallowRenderTheBoard();
    expect(result.type).toBe('div');
  });

  it('should have 256 squares', function() {
    var Square  = require('../js/components/Square.react');
    var board   = TestUtils.renderIntoDocument(<Board piecePosition={[0,0]} />);
    var squares = TestUtils.scryRenderedComponentsWithType(board, Square);
    expect(squares.length).toEqual(256);
  });

  it('should instantiate with the piece at 0,0', function() {
    var result = shallowRenderTheBoard();
    var rootSquareElementChildren; // root div which contains piece
    rootSquareElementChildren = result.props.children[0].props.children.props.children; // children[0] corresponds to first square i.e. square 0,0
    expect(rootSquareElementChildren).not.toBe(null);
  });

  it('should have a draggable piece', function() {
    var result = shallowRenderTheBoard();
    var rootSquareElementChildren;
    rootSquareElementChildren = result.props.children[0].props.children.props.children;
    expect(rootSquareElementChildren.props.draggable).toEqual('true');
  });

  it('dragging the piece changes its position', function() {
    jest.dontMock('../js/components/Game.react.js');
    var board = TestUtils.renderIntoDocument(<Board piecePosition={[0,0]} />);
    var square2 = TestUtils.scryRenderedDOMComponentsWithClass(board, 'square')[1];
    TestUtils.Simulate.dragOver(board);
    TestUtils.Simulate.drop(board, 1, 0);
    var result = shallowRenderTheBoard();
    // expect(result).toEqual();  not sure how to test this one
  });

  function shallowRenderTheBoard() {
    var elt = (<Board piecePosition={[0,0]} />);
    var shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(elt);
    return shallowRenderer.getRenderOutput();
  };
});
