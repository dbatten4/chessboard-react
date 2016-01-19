var React = require('react');

var Square = React.createClass({
  render: function() {
    return (
      <div className='square'
        style={{
        border: '1px solid black',
        width:  '100%',
        height: '100%'
      }}>
        <span>{this.props.children}</span>
      </div>
    );
  }
});

module.exports = Square;
