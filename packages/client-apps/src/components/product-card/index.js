import { ReactNode, useCallback } from 'react';

import styles from './style/style.module.css';

/**
 * Product Card Component
 *
 * @param {object} props product card props
 * @param {string} props.address will be contains seller address
 * @param {string} props.id product id usefull for key on whislist feature
 * @param {string} props.image product image
 * @param {string} props.price will be contains formatted product price (already string format)
 * @param {string} props.title product title
 * @param {Function} props.onClickCard callback function will be invoked when user click button
 * @returns {ReactNode} html tag will be rendered from react dom
 */
export const ProductCard = ({
  address,
  id,
  image,
  onClickCard,
  price,
  title
}) => {
  const eventOnClickCard = useCallback(
    (e) => {
      e.preventDefault();

      if (onClickCard) onClickCard(id);
    },
    [onClickCard, id]
  );

  return (
    <div className={styles['product-card']}>
      <img src={image} alt={title} loading="lazy" />
      <div className={styles['product-card__content']}>
        <h2>{title}</h2>
        <h6>{price}</h6>
        <p>{address}</p>
      </div>
      <button type="button" onClick={eventOnClickCard}>
        Add To Whislist
      </button>
    </div>
  );
};
