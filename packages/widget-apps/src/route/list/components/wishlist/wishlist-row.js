import PropTypes from 'prop-types';
import React, { memo } from 'react';

import styles from './style/style.module.css';

/**
 * Wishlist Row Component
 *
 * @param {string} root0
 * @param {string} root0.address
 * @param {string} root0.image
 * @param {string} root0.price
 * @param {string} root0.title
 * @since 2021.12.09
 * @returns {ReactNode}
 */
const WishlistRow = ({ address, image, price, title }) => (
  <div className={styles['wishlist-row']}>
    <img src={image} alt={title} />
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <span>{address}</span>
      <button className="material-icons">delete</button>
    </div>
  </div>
);

WishlistRow.propTypes = {
  address: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default memo(WishlistRow);
