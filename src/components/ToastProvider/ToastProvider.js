import React from 'react';

export const ToastContext = React.createContext({
  toastsList: [],
  addToast() { },
  dismissToast() { }
});

function ToastProvider({ children }) {
  const [toastsList, setToastsList] = React.useState([]);

  const addToast = (message, variant) => {
    setToastsList([...toastsList, { id: Math.random(), message, variant }]);
  }

  const dismissToast = (id) => {
    setToastsList((list) => list.filter((t) => t.id !== id))
  }

  return <ToastContext.Provider value={{
    toastsList, addToast, dismissToast
  }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
