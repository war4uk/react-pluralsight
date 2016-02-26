import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Forum} from './components/Forum.react';

let g = 45;
ReactDOM.render(
    React.createElement(Forum, null),
    document.getElementById('forum')
);