import { ReactNode, useEffect } from 'react';

import { ProductCard } from '../../components/product-card';
import { SAMPLE_LIST_CONSTANT } from '../../constant';
import styles from './style/style.module.css';

/**
 * Apps
 *
 * @returns {ReactNode} html tag will be rendered from react dom
 */
function ListPage() {
  useEffect(() => {
    if (typeof ReactSDKWidget !== 'undefined') {
      ReactSDKWidget.setPage('list');
    }
  }, []);

  return (
    <div className={styles['list-card']}>
      {SAMPLE_LIST_CONSTANT.map((item) => (
        <ProductCard key={item.image} {...item} />
      ))}
    </div>
  );
}

export default ListPage;
