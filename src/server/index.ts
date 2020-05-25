import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import html from '../html';

import { StarMatch, StarMatchProps } from '../components/StartMatch/StarMatch';

const port = 3000;
const server: express.Express = express();

server.use(express.static('dist'));

server.get('/', (req, res) => {
    const body = renderToString(
        React.createElement(StarMatch, {
            helpText: 'Pick 1 or more numbers that sum to the number of stars',
            timeRemaining: '10',
        } as StarMatchProps),
    );

    res.send(
        html({
            body,
        }),
    );
});

server.listen(port, () => console.log('Example app listening on port 3000!!'));
