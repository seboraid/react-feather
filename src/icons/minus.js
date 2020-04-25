import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Minus = (props, ref) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
};

Minus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Minus.defaultProps = {
  color: 'currentColor',
  size: '24',
};

Minus.displayName = 'Minus';

export default forwardRef(Minus);
