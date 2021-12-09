import PropTypes from 'prop-types';
import React from 'react';
import { Transition } from 'react-transition-group';

import styles from './style/style.module.css';
import WishlistRow from './wishlist-row';

const duration = 300;

const defaultStyle = {
  opacity: 0,
  transition: `opacity ${duration}ms ease-in-out`
};

const transitionStyles = {
  entered: { display: 'block', opacity: 1 },
  entering: { display: 'block', opacity: 0 },
  exited: { display: 'none', opacity: 0 },
  exiting: { display: 'block', opacity: 0 }
};

/**
 * Wishlist Container Component
 *
 * @param {object[]} props.list - list of wishlist
 * @param {boolean} props.show - toggle show / hide wishlist container
 * @since 2021.12.09
 * @returns {ReactNode}
 */
const WishlistContainer = ({ list, show }) => (
  <Transition in={show} timeout={duration} mountOnEnter>
    {(state) => (
      <div
        className={styles['wishlist-container']}
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <div className={styles['wishlist-header']}>
          <h1>
            <span className="material-icons">local_mall</span>Wishlist
          </h1>
          <p>{list.length} selected</p>
        </div>
        <div className={styles['wishlist-content']}>
          {list.map((item) => (
            <WishlistRow key={item.id} {...item} />
          ))}
        </div>
      </div>
    )}
  </Transition>
);

WishlistContainer.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired
};

export default WishlistContainer;
