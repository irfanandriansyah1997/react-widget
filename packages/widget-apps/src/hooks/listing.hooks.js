import { useEffect, useState } from 'react';

import { EVENT_PAGE } from '../constant';
import Emitter from '../helper/event-emitter.helper';

/**
 * Route Hooks
 *
 * @description react hook which will trigger when the client emits an event emitter with event
 * name is `CHANGE_PAGES_WIDGET`
 * @returns {string} current pages
 */
export const useRoute = () => {
  const [page, setPage] = useState('default'); // default | detail

  useEffect(() => {
    Emitter.on(EVENT_PAGE, (page) => {
      console.debug(page);
      setPage(page);
    });

    return () => {
      Emitter.off(EVENT_PAGE);
    };
  }, []);

  return page;
};
