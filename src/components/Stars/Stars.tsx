import * as React from 'react';
import utils from '../../utils/utils';

export interface StarsProps {
    count: number;
}

export class Stars extends React.Component<StarsProps, {}> {
    render() {
        const { count } = this.props;
        return (
            <div>
                {utils.range(1, count).map((starId) => (
                    <div key={starId} className="star" />
                ))}
                <span>կուծյիկ</span>
            </div>
        );
    }
}
