import React from 'react';
import PropTypes from 'prop-types';
import Result from '../result';
import Scoreboard from '../scoreboard';
import PlayerBoard from '../player-board';

const moves = [
    { name: 'rock', winsOver: ['scissors'] },
    { name: 'paper', winsOver: ['rock'] },
    { name: 'scissors', winsOver: ['paper'] }
];
const extMoves = [
    { name: 'rock', winsOver: ['scissors', 'lizard'] },
    { name: 'paper', winsOver: ['rock', 'spock'] },
    { name: 'scissors', winsOver: ['paper', 'lizard'] },
    { name: 'lizard', winsOver: ['paper', 'spock'] },
    { name: 'spock', winsOver: ['stone', 'scissors'] }
];
class Game extends React.Component {
    static propTypes = {
        player1: PropTypes.string.isRequired,
        player2: PropTypes.string,
        extended: PropTypes.bool,
        resetPlayer: PropTypes.func.isRequired
    };

    state = {
        winner: null,
        player2: {
            name: this.props.player2 || 'Computer',
            score: 0,
            move: null
        },
        player1: {
            name: this.props.player1,
            score: 0,
            move: null
        },
        playerMode: this.props.player2 ? 'twoPlayer' : 'onePlayer',
        moves: this.props.extended ? extMoves : moves
    };

    resetGame = () => {
        this.setState(state => ({
            winner: null,
            player2: {
                name: this.state.player2.name,
                score: 0,
                move: null
            },
            player1: {
                name: this.props.player1,
                score: 0,
                move: null
            },
            playerMode: this.props.player2 ? 'twoPlayer' : 'onePlayer',
            moves: this.props.extended ? extMoves : moves
        }));
    };

    setPlayerMove = move => {
        this.setState(
            state => ({
                ...state,
                player1: {
                    ...state.player1,
                    move: move
                }
            }),
            this.playRound
        );
    };

    playRound = () => {
        if (this.state.playerMode === 'onePlayer') {
            this.setPlayer2Move();
        }
        const player2wins = this.getRoundWinner();
        this.setState(
            state => ({
                player1: {
                    ...state.player1,
                    score: player2wins
                        ? state.player1.score
                        : state.player1.score + 1
                },
                player2: {
                    ...state.player2,
                    score: player2wins
                        ? state.player2.score + 1
                        : state.player2.score
                }
            }),
            this.setWinner
        );
    };

    setPlayer2Move = () =>
        this.setState(state => ({
            player2: {
                ...state.player2,
                move: moves[Math.floor(Math.random() * moves.length)].name
            }
        }));

    getRoundWinner = () => {
        const player1Move = this.state.player1.move;
        const player2Move = this.state.player2.move;
        if (player1Move === player2Move) return null;
        const move = this.state.moves.filter(m => m.name === player1Move)[0];
        console.log('checking moves:', move);
        return move.winsOver.indexOf(player2Move) < 0; // true === player2 wins
    };

    setWinner = () => {
        if (this.state.player1.score + this.state.player2.score === 3)
            this.setState({
                winner:
                    this.state.player1.score > this.state.player2.score
                        ? this.state.player1.name
                        : this.state.player2.name
            });
        return;
    };

    render() {
        return (
            <div className="game">
                <Scoreboard
                    player1={this.state.player1}
                    player2={this.state.player2}
                />
                {this.state.winner ? (
                    <Result
                        winner={this.state.winner}
                        newGame={this.resetGame}
                        newPlayer={this.props.resetPlayer}
                    />
                ) : (
                    <PlayerBoard
                        moves={this.state.moves}
                        playMove={this.setPlayerMove}
                        newPlayer={this.props.resetPlayer}
                        disabled={this.state.winner !== null}
                    />
                )}
            </div>
        );
    }
}

export default Game;
