import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Scoreboard = props => (
    <div className="game">
        <div className="scoreboard">
            {props.players.map(player => (
                <div className="player-score">
                    <div>
                        <span className="name">{player.name}</span>
                        <span className="score">{player.score}</span>
                    </div>
                    {props.round < 3 && (
                        <span className="move">
                            {player.move ? (
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={`hand-${player.move}`}
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
                    )}
                </div>
            ))}
        </div>
        <div className="result">
            {props.round === 3 && (
                <div
                    className={cn('winner', {
                        [props.players[0].score >
                        props.players[1].score]: 'fail',
                        [props.players[0].score <
                        props.players[1].score]: 'success'
                    })}
                >
                    {props.players[0].score < props.players[1].score ? (
                        <span className="success">
                            Du vant! <FontAwesomeIcon icon="smile-beam" />
                        </span>
                    ) : (
                        <span className="fail">
                            Du tapte <FontAwesomeIcon icon="sad-cry" />
                        </span>
                    )}
                    <div>
                        <button onClick={props.newGame}>Spill på nytt</button>
                        <button onClick={props.newPlayer}>Ny spiller</button>
                    </div>
                </div>
            )}
        </div>
    </div>
);

Scoreboard.propTypes = {
    players: PropTypes.arrayOf({
        name: PropTypes.string,
        score: PropTypes.number,
        move: PropTypes.string
    }).isRequired,
    round: PropTypes.number,
    roundWinner: PropTypes.string,
    newPlayer: PropTypes.func,
    newGame: PropTypes.func
};
export default Scoreboard;
