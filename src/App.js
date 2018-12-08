import React, { Component } from 'react';
import Game from './components/game';
import InitGame from './components/init-game';
import './scss/App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faHandPaper,
    faHandRock,
    faHandScissors,
    faHandLizard,
    faHandSpock,
    faQuestion,
    faRobot,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import {
    faSmileBeam,
    faSadCry,
    faUser
} from '@fortawesome/free-regular-svg-icons';
import Heading from './components/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    faRobot,
    faSpinner
);

class App extends Component {
    state = { player1: null, player2: null, playerMode: 'onePlayer' };

    startNewGame = name => this.setState({ player1: name });

    render() {
        return (
            <div className="container">
                <Heading level={1}>
                    <FontAwesomeIcon
                        icon="hand-rock"
                        size="2x"
                        className="padded-icon"
                    />
                    <FontAwesomeIcon
                        icon="hand-paper"
                        size="2x"
                        className="padded-icon"
                    />
                    <FontAwesomeIcon
                        icon="hand-scissors"
                        size="2x"
                        className="padded-icon"
                    />
                    {!this.state.player1 && <div>Rock - Paper - Scissors</div>}
                </Heading>
                {this.state.player1 ? (
                    <Game
                        player1={this.state.player1}
                        player2={this.state.player2}
                        computer="Computer"
                        resetPlayer={this.startNewGame}
                    />
                ) : (
                    <InitGame startNewGame={this.startNewGame} />
                )}
            </div>
        );
    }
}

export default App;
