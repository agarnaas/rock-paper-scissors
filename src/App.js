import React, { Component } from 'react';
import Scoreboard from './components/scoreboard';
import PlayerBoard from './components/player-board';
import InitGame from './components/init-game';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faHandPaper,
    faHandRock,
    faHandScissors,
    faHandLizard,
    faHandSpock,
    faQuestion,
    faRobot,
    faSmileBeam,
    faSadCry,
    faUser
} from '@fortawesome/free-solid-svg-icons';
library.add(
    faHandPaper,
    faHandRock,
    faHandScissors,
    faHandLizard,
    faHandSpock,
    faQuestion,
    faSmileBeam,
    faSadCry,
    faUser,
    faRobot
);

const moves = ['rock', 'paper', 'scissors'];

class App extends Component {
    state = {
        players: [
            {
                name: 'NPC',
                score: 0,
                move: null
            }
        ],
        round: 0,
        roundWinner: null,
        title: 'Stein - Saks - Papir'
    };

    initGame = name => {
        this.setState(state => ({
            players: state.players.concat({ name: name, score: 0, move: null })
        }));
    };
    newGame = () => {
        const player = this.state.players[1];
        this.setState({
            round: 0,
            roundWinner: null,
            players: [
                {
                    name: 'NPC',
                    score: 0,
                    move: null
                },
                {
                    name: player.name,
                    score: 0,
                    move: null
                }
            ]
        });
    };

    newPlayer = () =>
        this.setState({
            round: 0,
            roundWinner: null,
            players: [
                {
                    name: 'NPC',
                    score: 0,
                    move: null
                }
            ]
        });

    playMove = move => {
        const computerMove = moves[Math.floor(Math.random() * moves.length)];
        let roundWinner = this.getRoundWinner(move, computerMove);
        const computer = this.state.players[0];
        const user = this.state.players[1];
        computer.score =
            computer.name === roundWinner ? computer.score + 1 : computer.score;
        computer.move = computerMove;
        user.score = user.name === roundWinner ? user.score + 1 : user.score;
        user.move = move;
        this.setState(state => ({
            round: roundWinner ? state.round + 1 : state.round,
            players: [computer, user],
            roundWinner: roundWinner
        }));
    };

    getRoundWinner = (player, npc) => {
        if (
            (player === 'rock' && npc === 'scissors') ||
            (player === 'paper' && npc === 'rock') ||
            (player === 'scissors' && npc === 'paper')
        )
            return this.state.players[1].name;
        if (
            (npc === 'rock' && player === 'scissors') ||
            (npc === 'paper' && player === 'rock') ||
            (npc === 'scissors' && player === 'paper')
        )
            return this.state.players[0].name;

        return null;
    };

    render() {
        return this.state.players.length > 1 ? (
            <div className="game">
                <h1>{this.state.title}</h1>
                <Scoreboard
                    {...this.state}
                    newPlayer={this.newPlayer}
                    newGame={this.newGame}
                />
                <PlayerBoard
                    moves={moves}
                    playMove={this.playMove}
                    disabled={this.state.round === 3}
                />
            </div>
        ) : (
            <InitGame startGame={this.initGame} title={this.state.title} />
        );
    }
}

export default App;
