import React from 'react';
import './spinner.scss';

interface SpinnerProps {
	className?: string;
	size?: number;
	color?: string
}

const Spinner: React.FC<SpinnerProps> = ({ className, size, color}) => {
  return (
    <span className={className}>
      <svg
        className="loading-spinner"
        fill="#000"
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path"
          fill="none"
          stroke={color || '#000'}
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </svg>
    </span>
  );
}

Spinner.defaultProps = {
  size: 50,
};

export default Spinner;
