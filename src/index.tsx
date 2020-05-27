import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { StarMatch } from './components/StartMatch/StarMatch';

ReactDOM.hydrate(<StarMatch />, document.getElementById('game'));
