import React from 'react';

export const ToastContext = React.createContext({
  toastsList: [],
  addToast() { },
  dismissToast() { },
  clearToasts() { }
});

function ToastProvider({ children }) {
  const [toastsList, setToastsList] = React.useState([]);

  const addToast = (message, variant) => {
    setToastsList([...toastsList, { id: Math.random(), message, variant }]);
  }

  const dismissToast = (id) => {
    setToastsList((list) => list.filter((t) => t.id !== id))
  }

  const clearToasts = () => {
    setToastsList([]);
  }

  return <ToastContext.Provider value={{
    toastsList, addToast, dismissToast, clearToasts
  }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
