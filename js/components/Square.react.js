var React = require('react');

var Square = React.createClass({
  render: function() {
    return (
      <div style={{
        border: '1px solid black',
        width:  '100%',
        height: '100%'
      }}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Square;
