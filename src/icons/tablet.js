import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tablet = (props, ref) => {
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
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
};

Tablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tablet.defaultProps = {
  color: 'currentColor',
  size: '24',
};

Tablet.displayName = 'Tablet';

export default forwardRef(Tablet);
