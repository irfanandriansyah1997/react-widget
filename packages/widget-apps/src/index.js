import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style.module.css';

/**
 * Apps Component
 *
 * @returns {ReactNode}
 */
const Apps = () => (
  <div
    className={styles['sample-widget']}
    onClick={(e) => {
      e.preventDefault();

      alert('from widget side');
    }}
  >
    Widget
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>,
  document.getElementById('widget')
);
