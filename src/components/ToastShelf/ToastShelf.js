import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastsList, setToastsList }) {
  const handleDismiss = (idx) => {
    setToastsList((list) => list.filter((_, i) => i !== idx))
  }
  return (
    <ol className={styles.wrapper}>
      {toastsList.map((toast, i) => (
        <li className={styles.toastWrapper} key={i}>
          <Toast
            onDismiss={() => handleDismiss(i)}
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
