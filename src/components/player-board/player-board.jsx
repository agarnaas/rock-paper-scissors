import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../button';

import './player-board.scss';
import Heading from '../heading';

const PlayerBoard = props => (
    <div className="player-board">
        <Heading level={3}>
            <FontAwesomeIcon icon={['far', 'user']} /> Choose a weapon
        </Heading>
        {props.moves.map(move => (
            <Button
                onClick={() => props.playMove(move.name)}
                disabled={props.disabled}
                theme="tile"
            >
                <FontAwesomeIcon icon={`hand-${move.name}`} size="3x" />
            </Button>
        ))}
        <div className="player-board--reset-buttons">
            <Button
                onClick={props.resetGame}
                theme="secondary"
                className="inline"
            >
                Start over
            </Button>
            <Button onClick={e => props.newPlayer(null)} theme="secondary">
                New player
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
