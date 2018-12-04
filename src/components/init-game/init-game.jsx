import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './init-game.scss';

class InitGame extends React.Component {
    static propTypes = {
        startGame: PropTypes.func,
        title: PropTypes.string
    };

    state = {
        name: ''
    };

    onChange = event => {
        const { value } = event.target;
        this.setState({ name: value });
    };

    render() {
        return (
            <div className="init-game">
                <h1>{this.props.title}</h1>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Spiller 1"
                    onChange={this.onChange}
                />
                <button
                    onClick={() => this.props.startGame(this.state.name)}
                    disabled={this.state.name === ''}
                >
                    Start spillet
                </button>
            </div>
        );
    }
}

export default InitGame;
