var React = require('react/addons');
var ReactStyle = require('react-style');
var ListItem = require('./ListItem');
var cx = React.addons.classSet;

require('./List.styl');

var List = React.createClass({
  styles: {
    list: ReactStyle({
      background: '#fff',
      borderTop: '1px solid #c8c7cc',
      borderBottom: '1px solid #c8c7cc',
      margin: '-10px 0 0',
      padding: '0 10px',
      zIndex: 101,
    }),
  },

  render() {
    var classes = { list: true };
    if (this.props.className) classes[this.props.className] = true;

    return (
      <ul className={cx(classes)} styles={[this.styles.list, this.props.styles]}>
        {React.Children.map(this.props.children, (li, i) => {
          var classes = li.props.to ? 'ios-icon-angle-right' : '';
          return <ListItem key={li.key || i} className={classes}>{li.content || li}</ListItem>;
        })}
      </ul>
    );
  }
});

module.exports = List;