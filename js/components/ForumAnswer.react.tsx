import * as React from 'react';

export var ForumAnswer = React.createClass<any, any>({ // <any, any> - are typings for props and state objects. If omit will get ".... does not have a 'props' property ..." error in ForumAnswers

    propTypes: {
        answer: React.PropTypes.object.isRequired
    },

    render: function() {
 
        var answer = this.props.answer;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    { answer.body }
                </div>
            </div>
        )
    }

});