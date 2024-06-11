import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastsList, setToastsList }) {
  const handleDismiss = (id) => {
    setToastsList((list) => list.filter((t) => t.id !== id))
  }
  return (
    <ol className={styles.wrapper}>
      {toastsList.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            onDismiss={() => handleDismiss(toast.id)}
            variant={toast.variant}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
