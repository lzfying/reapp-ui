var React = require('react');
var { Link } = require('react-router');
var Menu = require('../ui/components/Menu');
var Toolbar = require('../ui/components/Toolbar');
var Title = require('../ui/components/Title');
var Button = require('../ui/components/Button');
var LeftNavView = require('../ui/views/LeftNavView');

var menu = (
  <Menu>
    <Link to="app">Home</Link>
    <Link to="viewer">Gallery</Link>
    <Link to="list">List</Link>
  </Menu>
);

var button = <Button type="menu" />;

var AppLayout = React.createClass({
  render() {
    var toolbar = (
      <Toolbar id="app-toolbar">
        <Title>
          {this.props.title}
        </Title>
      </Toolbar>
    );

    return (
      <LeftNavView
        ref="appLeftNavView"
        button={button}
        topContent={toolbar}
        sideContent={menu}
        topHeight={51}
        sideWidth={200}>

        {this.props.children}
      </LeftNavView>
    );
  }
});

module.exports = AppLayout;