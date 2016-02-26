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
        return React.createElement('div', null, React.createElement(ForumHeader_react_1.ForumHeader, { allAnswers: this.state.allAnswers }));
    }
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./ForumHeader.react":3}],3:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
exports.ForumHeader = React.createClass({
    render: function () {
        console.log(this.props.allAnswers);
        return React.createElement("nav", {
            className: "navbar navbar-default"
        }, React.createElement("div", {
            className: "container-fluid"
        }, React.createElement("div", {
            className: "navbar-header"
        }, React.createElement("a", {
            className: "navbar-brand",
            href: "#"
        }, "React Forum"))));
    }
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0eXBpbmdzL3RzZC5kLnRzIiwianMvYXBwLnRzIiwianMvY29tcG9uZW50cy9Gb3J1bS5yZWFjdC50cyIsImpzL2NvbXBvbmVudHMvRm9ydW1IZWFkZXIucmVhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7O0FDQUEsSUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFDL0IsSUFBWSxRQUFRLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFDdEMsNEJBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFFL0MsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ1gsUUFBUSxDQUFDLE1BQU0sQ0FDWCxLQUFLLENBQUMsYUFBYSxDQUFDLG1CQUFLLEVBQUUsSUFBSSxDQUFDLEVBQ2hDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQ25DLENBQUM7Ozs7O0FDUkYsSUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFFL0Isa0NBQTBCLHFCQUFxQixDQUFDLENBQUE7QUFFckMsYUFBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFFakMsZUFBZSxFQUFFO1FBQ2IsTUFBTSxDQUFDO1lBQ0gsVUFBVSxFQUFFO2dCQUNSLEdBQUcsRUFBRTtvQkFDRCxJQUFJLEVBQUUsK0JBQStCO29CQUNyQyxPQUFPLEVBQUUsS0FBSztpQkFDakI7Z0JBQ0QsR0FBRyxFQUFFO29CQUNELElBQUksRUFBRSw2RkFBNkY7b0JBQ25HLE9BQU8sRUFBRSxLQUFLO2lCQUNqQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLGtDQUFrQztvQkFDeEMsT0FBTyxFQUFFLEtBQUs7aUJBQ2pCO2FBQ0o7U0FDSixDQUFBO0lBRUwsQ0FBQztJQUVELE1BQU0sRUFBRTtRQUVKLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUN0QixLQUFLLEVBQ0wsSUFBSSxFQUNKLEtBQUssQ0FBQyxhQUFhLENBQU0sK0JBQVcsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQy9FLENBQUM7SUFFTixDQUFDO0NBRUosQ0FBQyxDQUFDOzs7OztBQ3BDSCxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUNwQixtQkFBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFFdkMsTUFBTSxFQUFFO1FBRUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUN0QixLQUFLLEVBQUU7WUFDSCxTQUFTLEVBQUUsdUJBQXVCO1NBQ3JDLEVBQ0QsS0FBSyxDQUFDLGFBQWEsQ0FDZixLQUFLLEVBQUU7WUFDSCxTQUFTLEVBQUUsaUJBQWlCO1NBQy9CLEVBQ0QsS0FBSyxDQUFDLGFBQWEsQ0FDZixLQUFLLEVBQUU7WUFDSCxTQUFTLEVBQUUsZUFBZTtTQUM3QixFQUNELEtBQUssQ0FBQyxhQUFhLENBQ2YsR0FBRyxFQUFFO1lBQ0QsU0FBUyxFQUFFLGNBQWM7WUFDekIsSUFBSSxFQUFFLEdBQUc7U0FDWixFQUNELGFBQWEsQ0FDaEIsQ0FDSixDQUNKLENBQ0osQ0FBQztJQUVOLENBQUM7Q0FFSixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQge0ZvcnVtfSBmcm9tICcuL2NvbXBvbmVudHMvRm9ydW0ucmVhY3QnO1xyXG5cclxubGV0IGcgPSA0NTtcclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3J1bSwgbnVsbCksXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ydW0nKVxyXG4pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7Rm9ydW1IZWFkZXJ9IGZyb20gJy4vRm9ydW1IZWFkZXIucmVhY3QnO1xyXG5cclxuZXhwb3J0IHZhciBGb3J1bSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIFxyXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhbGxBbnN3ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIjFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiSXNuJ3QgdGhhdCBhYm91dCB0aW1lIHRyYXZlbD9cIixcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiMlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJSZWFjdCBhbmQgRmx1eCBhcmUgYSB0b29sIGFuZCBtZXRob2RvbG9naWVzIGZvciBidWlsZGluZyB0aGUgZnJvbnQgZW5kIG9mIHdlYiBhcHBsaWNhdGlvbnMuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycmVjdDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIjNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiUmVhY3QgaXMgYSBzeW5vbnltIGZvciAncmVzcG9uZCdcIixcclxuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAnZGl2JywgXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoPGFueT5Gb3J1bUhlYWRlciwgeyBhbGxBbnN3ZXJzOiB0aGlzLnN0YXRlLmFsbEFuc3dlcnMgfSkgICAgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59KTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCB2YXIgRm9ydW1IZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBcclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5hbGxBbnN3ZXJzKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgXCJuYXZcIiwge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBcImRpdlwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImNvbnRhaW5lci1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJuYXZiYXItaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJlYWN0IEZvcnVtXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSk7Il19
