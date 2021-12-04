import React from 'react';

import { useRoute } from './hooks/listing.hooks';
import { ListPage } from './route/list';

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
