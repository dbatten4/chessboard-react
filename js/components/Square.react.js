var React = require('react');

var Square = React.createClass({
  render: function() {
    return (
      <div style={{
        border: 'solid black',
        width: '100%',
        height: '100%'
      }}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Square;