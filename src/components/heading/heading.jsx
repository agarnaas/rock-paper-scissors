import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './heading.scss';

const Heading = ({ children, className, level }) => {
    return React.createElement(
        `h${level}`,
        {
            className: cn('heading', `heading--level-${level}`, className)
        },
        children
    );
};

Heading.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3])
};
export default Heading;
