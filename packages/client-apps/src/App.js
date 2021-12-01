import { useEffect } from 'react';

import styles from './style.module.css';

/**
 * Apps
 *
 * @returns {ReactNode}
 */
function App() {
  useEffect(() => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'http://localhost:9000/index.bundle.js';

    document.body.append(s);
  }, []);

  return <div className={styles.apps}>Client Content</div>;
}

export default App;
