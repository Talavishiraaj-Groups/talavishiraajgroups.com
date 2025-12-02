import React from 'react';

export default function ArrowIcon({
  className = 'h-4 w-4 mr-3 mt-1 text-gray-700 flex-shrink-0',
  ariaHidden = true,
}) {
  return (
    <svg
      aria-hidden={ariaHidden}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

