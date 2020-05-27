import NumberStatus from './numberStatus';

const colors = {
    [NumberStatus.AVAILABLE]: 'lightgray',
    [NumberStatus.USED]: 'lightgreen',
    [NumberStatus.WRONG]: 'lightcoral',
    [NumberStatus.CANDIDATE]: 'deepskyblue',
};

export default colors;
