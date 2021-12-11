import { ReactNode, useEffect } from 'react';

import { ProductCard } from '../../components/product-card';
import { SAMPLE_LIST_CONSTANT } from '../../constant';
import { getSDKInstance } from '../../helper/widget-sdk.helper';
import styles from './style/style.module.css';

/**
 * Apps
 *
 * @returns {ReactNode} html tag will be rendered from react dom
 */
function ListPage() {
  useEffect(() => {
    getSDKInstance().then((item) => {
      item.setPage('list');
    });
  }, []);

  /**
   * On CLick Product Event Handler
   *
   * @param {object} item - list item
   * @since 2021.12.09
   * @returns {void}
   */
  const onClickProductCard = (item) => {
    ReactSDKWidget.setListing(item);
  };

  return (
    <div className={styles['list-card']}>
      {SAMPLE_LIST_CONSTANT.map((item) => (
        <ProductCard
          key={item.image}
          {...item}
          onClickCard={() => onClickProductCard(item)}
        />
      ))}
    </div>
  );
}

export default ListPage;
