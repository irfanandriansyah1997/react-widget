import loadable from '@loadable/component';
import React, { memo } from 'react';

import { useRoute } from './hooks/routing.hooks';

const ListPage = memo(loadable(() => import('./route/list')));

/**
 * Apps Component
 *
 * @returns {ReactNode}
 */
export const Apps = () => {
  const pages = useRoute();

  switch (pages) {
    case 'list':
      return <ListPage />;

    default:
      return null;
  }
};
