import * as React from 'react';
import utils from '../../utils/utils';

export interface StarsProps {
    count: number;
}

export const Stars: React.FunctionComponent<StarsProps> = (props: StarsProps) => {
    const { count } = props;
    return (
        <>
            {utils.range(1, count).map((starId) => (
                <div key={starId} className="star" />
            ))}
        </>
    );
};
