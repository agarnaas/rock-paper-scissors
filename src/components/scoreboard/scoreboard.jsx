import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './scoreboard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Scoreboard = props => (
    <div className="scoreboard">
        <div className="player-score">
            <div>
                <span className="name">{props.player1.name}</span>
                <span className="score">{props.player1.score}</span>
            </div>
            <span className="move">
                {props.player1.move && props.player2.move ? (
                    <FontAwesomeIcon
                        className="icon"
                        icon={`hand-${props.player1.move}`}
                        size="7x"
                    />
                ) : (
                    <FontAwesomeIcon
                        className="icon"
                        icon="question"
                        size="7x"
                    />
                )}
            </span>
        </div>
        <div className="player-score">
            <div>
                <span className="name">{props.player2.name}</span>
                <span className="score">{props.player2.score}</span>
            </div>
            <span className="move">
                {props.player1.move && props.player2.move ? (
                    <FontAwesomeIcon
                        className="icon"
                        icon={`hand-${props.player2.move}`}
                        size="7x"
                    />
                ) : (
                    <FontAwesomeIcon
                        className="icon"
                        icon="question"
                        size="7x"
                    />
                )}
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
