import * as React from 'react';
import colors from '../../colors';

export interface PlayNumberProps {
    number: number;
    status: string;
}

export const PlayNumber: React.FunctionComponent<PlayNumberProps> = (props: PlayNumberProps) => {
    const { number, status } = props;
    return (
        <button className={'number ' + colors[status]} onClick={(): number => number}>
            {number}
        </button>
    );
};
