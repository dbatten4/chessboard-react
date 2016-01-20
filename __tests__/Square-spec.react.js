jest.dontMock('../js/components/Square.react.js');

describe('Square', function() {

  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var Square;

  beforeEach(function() {
    Square = require('../js/components/Square.react');
  });

  it('should exist', function() {
    var square = TestUtils.renderIntoDocument( <Square /> );
    expect(TestUtils.isCompositeComponent(square)).toBeTruthy();
  });

  it('should render a div', function() {
    var elt = (<Square />);
    var shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(elt);
    var result = shallowRenderer.getRenderOutput();
    expect(result.type).toBe('div');
  });

  it('should be able to accept a piece', function() {
    var square = TestUtils.renderIntoDocument( <Square>test</Square> );
    var item = TestUtils.findRenderedDOMComponentWithClass(square, 'square').getDOMNode().textContent;
    expect(item).toEqual('test');
  });

});
