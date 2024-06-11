import React from 'react';

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleEsc = (ev) => {
      if (ev.key === 'Escape') {
        callback();
      }
    }
    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, []);
}