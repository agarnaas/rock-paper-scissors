import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Heading from '../heading';

const Result = props => (
    <div className="result">
        <div className={props.className}>
            <Heading level={3}>Vinneren er: {props.winner}!</Heading>
        </div>
        <div>
            <Button onClick={props.newGame}>Spill på nytt</Button>
            <Button onClick={() => props.newPlayer(null)}>Ny spiller</Button>
        </div>
    </div>
);

Result.propTypes = {
    winner: PropTypes.string,
    newPlayer: PropTypes.func,
    newGame: PropTypes.func,
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Result;
