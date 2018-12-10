import React from 'react';
import PropTypes from 'prop-types';
import './text-input.scss';

const TextInput = props => (
    <div className="text-input">
        <label className="form_label">
            {props.label}
            <input
                type="text"
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                placeholder={props.placeholder}
                required={props.required}
            />
        </label>
    </div>
);

TextInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    required: PropTypes.bool
};

export default TextInput;
