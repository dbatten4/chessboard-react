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
    var elt = (<Square />);
    var shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(elt);
    var result = shallowRenderer.getRenderOutput();
    expect(result.props.children.type).toBe('span'); // not sure how to write the expectation for this test
  });

});
