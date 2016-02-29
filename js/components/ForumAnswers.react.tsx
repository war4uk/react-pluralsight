import * as React from 'react';
import {ForumAnswer} from './ForumAnswer.react'

export var ForumAnswers = React.createClass<any, any>({ // <any, any> - are typings for props and state objects. If omit will get ".... does not have a 'props' property ..." error in Forum

    render: function() {

        var allAnswers = this.props.allAnswers;
        var answers = [];

        for (var key in allAnswers) {
            answers.push(<ForumAnswer key={key} id={key} answer={allAnswers[key] } />)
        }

        return (
            <div>
                { answers }
            </div>
        )
    }

});
