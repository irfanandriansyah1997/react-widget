import React, { useCallback, useContext, useEffect, useState } from 'react';

import { EVENT_ON_ADD_LISTING } from '../constant';
import Emitter from '../helper/event-emitter.helper';

const WishlistContext = React.createContext();

/**
 * Wishlist Hooks
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 2021.12.09
 * @returns {object[]}
 */
export const useWishlist = () => {
  const [list, setWishlist] = useState([]);

  const setListing = useCallback(
    (item) => {
      const { id } = item;
      const isExist = list.find(({ id: currentId }) => currentId === id);

      if (!isExist) setWishlist([...list, item]);
    },
    [list]
  );

  useEffect(() => {
    Emitter.on(EVENT_ON_ADD_LISTING, (listing) => {
      setListing(listing);
    });

    return () => {
      Emitter.off(EVENT_ON_ADD_LISTING);
    };
  }, [setListing]);

  return {
    item: list
  };
};

/**
 * Use Wishlist Context
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description
 * @since 2021.12.09
 * @returns {object}
 */
export const useWishlistContext = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      'useWishlistContext must be used within the WishlistProvider'
    );
  }

  return context;
};

/**
 * Wishlist Provider
 *
 * @param {ReactNode} props.children - children props
 * @returns {ReactNode}
 * @since 2021.12.09
 */
export const WishlistProvider = ({ children }) => {
  const { item } = useWishlist();

  return (
    <WishlistContext.Provider value={{ item }}>
      {children}
    </WishlistContext.Provider>
  );
};
