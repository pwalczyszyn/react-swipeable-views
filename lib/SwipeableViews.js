var React = require('react');

var tweenState = require('react-tween-state');

var Swipeable = require('react-swipeable');

var SwipeableViews = React.createClass({

  mixins: [tweenState.Mixin],

  getDefaultProps: function() {
    return {
      gutter: 10
    };
  },

  getInitialState: function() {
    return {
      left: 0,
      mode: 'view' // view | swiping | animating
    };
  },

  onSwipingLeft: function(event, diff) {

  },

  onSwipingRight: function(event, diff) {

  },

  onSwiped: function (event, diffX, diffY, wasFlick) {

  },

  render: function () {
    var Container;
    var CurrentView;
    var SwipeToView;

    var left = this.getTweeningValue('left');
    var children = [];

    if (this.state.mode === 'swiping') {

    }

    console.log('left', left);

    var container = React.createElement('div', {
      ref: 'container',
      style: {
        left: left
      }
    }, children);

    return React.createElement(Swipeable, {
      onSwipingLeft: this.onSwipingLeft,
      onSwipingRight: this.onSwipingRight,
      onSwiped: this.onSwiped
    }, container);
  }

});

module.exports = SwipeableViews;
