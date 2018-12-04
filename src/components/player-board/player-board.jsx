import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerBoard = props => (
    <div className="player-board">
        <h4>
            <FontAwesomeIcon icon="user" regular={true} /> velg trekk
        </h4>
        {props.moves.map(move => (
            <button
                onClick={() => props.playMove(move)}
                disabled={props.disabled}
            >
                <FontAwesomeIcon icon={`hand-${move}`} size="4x" />
            </button>
        ))}
    </div>
);

PlayerBoard.propTypes = {
    moves: PropTypes.arrayOf(PropTypes.string),
    playMove: PropTypes.func,
    disabled: PropTypes.bool
};
export default PlayerBoard;
