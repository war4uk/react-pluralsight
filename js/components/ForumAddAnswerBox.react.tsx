import * as React from 'react';

var ENTER_KEY_CODE = 13;

export var ForumAddAnswerBox = React.createClass({
    
    render: function() {
        return (
            <div>
                <textarea id="addAnswer" className="col-md-6 col-xs-8"></textarea>
                &nbsp;<input type="button" className="btn btn-primary" value="Add" />
            </div>
        )
    }

});