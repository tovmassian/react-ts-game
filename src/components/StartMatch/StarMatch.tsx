import * as React from 'react';
import utils from '../../utils/utils';
import { Stars } from '../Stars/Stars';
import { PlayNumber } from '../PlayNumber/PlayNumber';
import NumberStatus from '../../numberStatus';

export interface StarMatchProps {
    helpText: string;
    timeRemaining: string;
}

export const StarMatch: React.FunctionComponent = () => {
    const [stars, setStars] = React.useState(utils.random(1, 9));
    const [availableCandidateNumbers, setAvailableCandidateNumbers] = React.useState([1, 2, 3, 5, 6]);
    const [candidateNumbers, setCandidateNumbers] = React.useState([1, 2]);

    // const wrongCandidates = utils.sum();

    function numberStatus(number: number): string {
        if (!availableCandidateNumbers.includes(number)) {
            return NumberStatus.USED;
        }
        if (candidateNumbers.includes(number)) {
            return 'yes';
        }
        return NumberStatus.AVAILABLE;
    }

    return (
        <div className="game">
            <div className="help">Pick 1 or more numbers that sum to the number of stars</div>
            <div className="body">
                <div className="left">
                    <Stars count={stars} />
                </div>
                <div className="right">
                    {utils.range(1, 9).map((number) => (
                        <PlayNumber key={number} number={number} status={numberStatus(number)} />
                    ))}
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
};
