import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Heading from '../heading';
import './scoreboard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Scoreboard = props => (
    <div className="scoreboard">
        <div className="player-score">
            <div>
                <Heading level={2}>{props.player1.name}</Heading>
                <div className="score">{props.player1.score}</div>
            </div>
            <span
                className={cn('move', {
                    'move-unknown': !props.player1.move
                })}
            >
                <FontAwesomeIcon
                    className="icon"
                    icon={
                        props.player1.move
                            ? `hand-${props.player1.move}`
                            : 'question'
                    }
                    size="6x"
                />
            </span>
        </div>

        <div className="player-score">
            <div>
                <Heading level={2}>{props.player2.name}</Heading>
                <div className="score">{props.player2.score}</div>
            </div>
            <span
                className={cn('move', {
                    'move-unknown': !props.player2.move
                })}
            >
                <FontAwesomeIcon
                    className="icon"
                    icon={
                        props.player2.move
                            ? `hand-${props.player2.move}`
                            : 'question'
                    }
                    size="6x"
                />
            </span>
        </div>
    </div>
);

Scoreboard.propTypes = {
    player1: PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.number,
        move: PropTypes.string
    }).isRequired,
    player2: PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.number,
        move: PropTypes.string
    }).isRequired
};
export default Scoreboard;
