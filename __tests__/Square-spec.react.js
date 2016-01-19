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

});
