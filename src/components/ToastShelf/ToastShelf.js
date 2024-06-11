import React, { useContext } from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastsList, dismissToast } = useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toastsList.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            onDismiss={() => dismissToast(toast.id)}
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
