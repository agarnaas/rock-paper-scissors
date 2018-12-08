import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './button.scss';

export const themes = {
    submit: 'submit',
    primary: 'primary',
    secondary: 'secondary',
    tile: 'tile'
};

const Button = props => (
    <button
        className={cn('button', `button--${props.theme}`, props.className)}
        disabled={props.disabled}
        onClick={props.onClick}
        type={props.type}
    >
        <span className="btn-text">{props.children}</span>
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    type: PropTypes.string
};

export default Button;
