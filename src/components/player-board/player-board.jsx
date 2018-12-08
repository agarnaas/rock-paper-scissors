import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../button';

import './player-board.scss';

const PlayerBoard = props => (
    <div className="player-board">
        <h4>
            <FontAwesomeIcon icon={['far', 'user']} /> Spill et trekk
        </h4>
        {props.moves.map(move => (
            <Button
                onClick={() => props.playMove(move.name)}
                disabled={props.disabled}
                theme="tile"
            >
                <FontAwesomeIcon icon={`hand-${move.name}`} size="4x" />
            </Button>
        ))}
        <div>
            <Button
                onClick={props.resetGame}
                theme="secondary"
                className="inline"
            >
                Start på nytt
            </Button>
            <Button onClick={e => props.newPlayer(null)} theme="secondary">
                Ny spiller
            </Button>
        </div>
    </div>
);

PlayerBoard.propTypes = {
    moves: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            winsOver: PropTypes.arrayOf(PropTypes.string)
        })
    ).isRequired,
    playMove: PropTypes.func,
    newPlayer: PropTypes.func,
    resetGame: PropTypes.func,
    disabled: PropTypes.bool
};
export default PlayerBoard;
