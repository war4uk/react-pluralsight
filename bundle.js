require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/typings/tsd.d.ts":[function(require,module,exports){

},{}],1:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var Forum_react_1 = require('./components/Forum.react');
var g = 45;
ReactDOM.render(React.createElement(Forum_react_1.Forum, null), document.getElementById('forum'));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/Forum.react":2}],2:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ForumHeader_react_1 = require('./ForumHeader.react');
var ForumQuestion_react_1 = require('./ForumQuestion.react');
var ForumAnswers_react_1 = require('./ForumAnswers.react');
var ForumAddAnswerBox_react_1 = require('./ForumAddAnswerBox.react');
exports.Forum = React.createClass({
    getInitialState: function () {
        return {
            allAnswers: {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and Flux are a tool and methodologies for building the front end of web applications.",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for 'respond'",
                    correct: false
                }
            }
        };
    },
    render: function () {
        return (React.createElement("div", null, React.createElement(ForumHeader_react_1.ForumHeader, null), React.createElement("div", {"className": "container"}, React.createElement(ForumQuestion_react_1.ForumQuestion, null), React.createElement("hr", null), React.createElement(ForumAnswers_react_1.ForumAnswers, {"allAnswers": this.state.allAnswers}), React.createElement("hr", null), React.createElement("h4", null, "Add an answer"), React.createElement(ForumAddAnswerBox_react_1.ForumAddAnswerBox, null))));
    }
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./ForumAddAnswerBox.react":3,"./ForumAnswers.react":5,"./ForumHeader.react":6,"./ForumQuestion.react":7}],3:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ENTER_KEY_CODE = 13;
exports.ForumAddAnswerBox = React.createClass({
    render: function () {
        return (React.createElement("div", null, React.createElement("textarea", {"id": "addAnswer", "className": "col-md-6 col-xs-8"}), " ", React.createElement("input", {"type": "button", "className": "btn btn-primary", "value": "Add"})));
    }
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
exports.ForumAnswer = React.createClass({
    propTypes: {
        answer: React.PropTypes.object.isRequired
    },
    render: function () {
        var answer = this.props.answer;
        return (React.createElement("div", {"className": "panel panel-default"}, React.createElement("div", {"className": "panel-body"}, answer.body)));
    }
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ForumAnswer_react_1 = require('./ForumAnswer.react');
exports.ForumAnswers = React.createClass({
    render: function () {
        var allAnswers = this.props.allAnswers;
        var answers = [];
        for (var key in allAnswers) {
            answers.push(React.createElement(ForumAnswer_react_1.ForumAnswer, {"key": key, "id": key, "answer": allAnswers[key]}));
        }
        return (React.createElement("div", null, answers));
    }
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./ForumAnswer.react":4}],6:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
exports.ForumHeader = React.createClass({
    render: function () {
        return (React.createElement("nav", {"className": "navbar navbar-default"}, React.createElement("div", {"className": "container-fluid"}, React.createElement("div", {"className": "navbar-header"}, React.createElement("a", {"className": "navbar-brand", "href": "#"}, "React Forum")))));
    }
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],7:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
exports.ForumQuestion = React.createClass({
    render: function () {
        return (React.createElement("div", null, React.createElement("h1", null, "What is React and Flux?"), React.createElement("p", null, "I don't understand React or Flux. Can someone help me?")));
    }
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0eXBpbmdzL3RzZC5kLnRzIiwianMvYXBwLnRzIiwianMvY29tcG9uZW50cy9Gb3J1bS5yZWFjdC50c3giLCJqcy9jb21wb25lbnRzL0ZvcnVtQWRkQW5zd2VyQm94LnJlYWN0LnRzeCIsImpzL2NvbXBvbmVudHMvRm9ydW1BbnN3ZXIucmVhY3QudHN4IiwianMvY29tcG9uZW50cy9Gb3J1bUFuc3dlcnMucmVhY3QudHN4IiwianMvY29tcG9uZW50cy9Gb3J1bUhlYWRlci5yZWFjdC50c3giLCJqcy9jb21wb25lbnRzL0ZvcnVtUXVlc3Rpb24ucmVhY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7OztBQ0FBLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLElBQVksUUFBUSxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBQ3RDLDRCQUFvQiwwQkFBMEIsQ0FBQyxDQUFBO0FBRS9DLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNYLFFBQVEsQ0FBQyxNQUFNLENBQ1gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQkFBSyxFQUFFLElBQUksQ0FBQyxFQUNoQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUNuQyxDQUFDOzs7OztBQ1JGLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBRS9CLGtDQUEwQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2hELG9DQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELG1DQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2xELHdDQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBRWpELGFBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBRWpDLGVBQWUsRUFBRTtRQUViLE1BQU0sQ0FBQztZQUNILFVBQVUsRUFBRTtnQkFDUixHQUFHLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLCtCQUErQjtvQkFDckMsT0FBTyxF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TUFBTSxDQUFDLENBQ0gscUJBQUMsR0FBRyxLQUFDLFNBQVMsR0FBQyx1QkFBdUIsR0FDcEMscUJBQUMsR0FBRyxLQUFDLFNBQVMsR0FBQyxpQkFBaUIsR0FDOUIscUJBQUMsR0FBRyxLQUFDLFNBQVMsR0FBQyxlQUFlLEdBQzVCLHFCQUFDLENBQUMsS0FBQyxTQUFTLEdBQUMsY0FBYyxHQUFDLElBQUksR0FBQyxHQUFHLGlCQUVoQyxDQUNBLENBQ0YsQ0FDRixDQUNULENBQUE7SUFDTCxDQUFDO0NBRUosQ0FBQyxDQUFDOzs7OztBQ2xCSCxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUVwQixxQkFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFFekMsTUFBTSxFQUFFO1FBQ0osTUFBTSxDQUFDLENBQ0gscUJBQUMsR0FBRyxTQUNBLHFCQUFDLEVBQUUsbUNBQTZCLEVBQ2hDLHFCQUFDLENBQUMsa0VBRUUsQ0FDRixDQUNULENBQUE7SUFDTCxDQUFDO0NBRUosQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtGb3J1bX0gZnJvbSAnLi9jb21wb25lbnRzL0ZvcnVtLnJlYWN0JztcclxuXHJcbmxldCBnID0gNDU7XHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ydW0sIG51bGwpLFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcnVtJylcclxuKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge0ZvcnVtSGVhZGVyfSBmcm9tICcuL0ZvcnVtSGVhZGVyLnJlYWN0JztcclxuaW1wb3J0IHtGb3J1bVF1ZXN0aW9ufSBmcm9tICcuL0ZvcnVtUXVlc3Rpb24ucmVhY3QnO1xyXG5pbXBvcnQge0ZvcnVtQW5zd2Vyc30gZnJvbSAnLi9Gb3J1bUFuc3dlcnMucmVhY3QnO1xyXG5pbXBvcnQge0ZvcnVtQWRkQW5zd2VyQm94fSBmcm9tICcuL0ZvcnVtQWRkQW5zd2VyQm94LnJlYWN0JztcclxuXHJcbmV4cG9ydCB2YXIgRm9ydW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBcclxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWxsQW5zd2Vyczoge1xyXG4gICAgICAgICAgICAgICAgXCIxXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcIklzbid0IHRoYXQgYWJvdXQgdGltZSB0cmF2ZWw/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIjJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiUmVhY3QgYW5kIEZsdXggYXJlIGEgdG9vbCBhbmQgbWV0aG9kb2xvZ2llcyBmb3IgYnVpbGRpbmcgdGhlIGZyb250IGVuZCBvZiB3ZWIgYXBwbGljYXRpb25zLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3Q6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCIzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcIlJlYWN0IGlzIGEgc3lub255bSBmb3IgJ3Jlc3BvbmQnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgIFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ydW1IZWFkZXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3J1bVF1ZXN0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcnVtQW5zd2VycyBhbGxBbnN3ZXJzPXsgdGhpcy5zdGF0ZS5hbGxBbnN3ZXJzIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+QWRkIGFuIGFuc3dlcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcnVtQWRkQW5zd2VyQm94IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbn0pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbnZhciBFTlRFUl9LRVlfQ09ERSA9IDEzO1xyXG5cclxuZXhwb3J0IHZhciBGb3J1bUFkZEFuc3dlckJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiYWRkQW5zd2VyXCIgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLThcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT1cIkFkZFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCB2YXIgRm9ydW1BbnN3ZXIgPSBSZWFjdC5jcmVhdGVDbGFzczxhbnksIGFueT4oeyAvLyA8YW55LCBhbnk+IC0gYXJlIHR5cGluZ3MgZm9yIHByb3BzIGFuZCBzdGF0ZSBvYmplY3RzLiBJZiBvbWl0IHdpbGwgZ2V0IFwiLi4uLiBkb2VzIG5vdCBoYXZlIGEgJ3Byb3BzJyBwcm9wZXJ0eSAuLi5cIiBlcnJvciBpbiBGb3J1bUFuc3dlcnNcclxuXHJcbiAgICBwcm9wVHlwZXM6IHtcclxuICAgICAgICBhbnN3ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gXHJcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMucHJvcHMuYW5zd2VyO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgYW5zd2VyLmJvZHkgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3J1bUFuc3dlcn0gZnJvbSAnLi9Gb3J1bUFuc3dlci5yZWFjdCdcclxuXHJcbmV4cG9ydCB2YXIgRm9ydW1BbnN3ZXJzID0gUmVhY3QuY3JlYXRlQ2xhc3M8YW55LCBhbnk+KHsgLy8gPGFueSwgYW55PiAtIGFyZSB0eXBpbmdzIGZvciBwcm9wcyBhbmQgc3RhdGUgb2JqZWN0cy4gSWYgb21pdCB3aWxsIGdldCBcIi4uLi4gZG9lcyBub3QgaGF2ZSBhICdwcm9wcycgcHJvcGVydHkgLi4uXCIgZXJyb3IgaW4gRm9ydW1cclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgYWxsQW5zd2VycyA9IHRoaXMucHJvcHMuYWxsQW5zd2VycztcclxuICAgICAgICB2YXIgYW5zd2VycyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsQW5zd2Vycykge1xyXG4gICAgICAgICAgICBhbnN3ZXJzLnB1c2goPEZvcnVtQW5zd2VyIGtleT17a2V5fSBpZD17a2V5fSBhbnN3ZXI9e2FsbEFuc3dlcnNba2V5XSB9IC8+KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsgYW5zd2VycyB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgdmFyIEZvcnVtSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QgRm9ydW1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgdmFyIEZvcnVtUXVlc3Rpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPldoYXQgaXMgUmVhY3QgYW5kIEZsdXg/PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEkgZG9uJ3QgdW5kZXJzdGFuZCBSZWFjdCBvciBGbHV4LiBDYW4gc29tZW9uZSBoZWxwIG1lP1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59KTsiXX0=
