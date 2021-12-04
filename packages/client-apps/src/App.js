import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './style.module.css';
import ListPage from './routes/list';

/**
 * Apps
 *
 * @returns {ReactNode} html tag will be rendered from react dom
 */
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="list">
          <Route index element={<ListPage />} />
        </Route>
        <Route index element={<Navigate to="/list" replace={true} />} />
      </Route>
    </Routes>
  );
}

export default App;
