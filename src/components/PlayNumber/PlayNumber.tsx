import * as React from 'react';

export interface PlayNumberProps {
    number: number;
}

export class PlayNumber extends React.Component<PlayNumberProps, {}> {
    render() {
        const { number } = this.props;
        return (
            <div>
                <button className="number">{number}</button>
            </div>
        );
    }
}
