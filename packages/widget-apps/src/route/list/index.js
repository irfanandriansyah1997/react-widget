import React, { ReactNode } from 'react';

import { useWishlistContext } from '../../hooks/wishlist.hooks';
import Wishlist from './components/wishlist';

/**
 * List Component Pages
 *
 * @author Irfan Andriansyah <irfan@99.co>
 * @returns {ReactNode} component react
 */
const ListPage = () => {
  const { item } = useWishlistContext();

  return <Wishlist list={item} />;
};

export default ListPage;
