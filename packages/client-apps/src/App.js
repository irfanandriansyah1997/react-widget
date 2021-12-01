import { useEffect } from 'react';

import styles from './style.module.css';

/**
 * Apps
 *
 * @returns {ReactNode}
 */
function App() {
  useEffect(() => {
    const widgetScript = document.createElement('script');
    widgetScript.type = 'text/javascript';
    widgetScript.src = 'http://localhost:9000/index.bundle.js';

    document.body.append(widgetScript);
  }, []);

  return (
    <div
      className={styles.apps}
      onClick={(e) => {
        e.preventDefault();

        alert('from client side');
      }}
    >
      Client Content
    </div>
  );
}

export default App;
