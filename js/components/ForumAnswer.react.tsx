import * as React from 'react';

export class ForumAnswer extends React.Component<{key: string, id: string, answer: any}, any> {
    render() {
        var answer = this.props.answer;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    { answer.body }
                </div>
            </div>
        )
    }
}
