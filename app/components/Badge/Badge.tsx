import React, { ReactNode } from 'react';

function Badge({ children } : {children:ReactNode}) {
  return (
    <button type="button" className="py-1 mt-3 px-2 z-10 bg-neuorange block">
      <small className="text-sm text-white">
        {children}
      </small>
    </button>
  );
}

export default Badge;
