import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../text-input';
import Button from '../button';
import './init-game.scss';

class InitGame extends React.Component {
    static propTypes = {
        startNewGame: PropTypes.func
    };

    state = {
        name: ''
    };

    onChange = event => {
        const { value } = event.target;
        this.setState({ name: value });
    };

    onKeyDown = event => {
        const { key } = event;
        if (key === 'Enter') this.props.startNewGame(this.state.name);
        return;
    };

    render() {
        return (
            <div className="init-game">
                <TextInput
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    label="Player name"
                />
                <Button
                    onClick={() => this.props.startNewGame(this.state.name)}
                    disabled={this.state.name === ''}
                    theme="primary"
                >
                    Start game
                </Button>
            </div>
        );
    }
}

export default InitGame;
