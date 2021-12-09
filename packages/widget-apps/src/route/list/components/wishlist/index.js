import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import styles from './style/style.module.css';
import WishlistContainer from './wishlist-container';

const duration = 300;

const defaultStyle = {
  opacity: 0
};

const transitionStyles = {
  entered: { display: 'block', opacity: 1 },
  entering: { display: 'block', opacity: 0 },
  exited: { display: 'none', opacity: 0 },
  exiting: { display: 'block', opacity: 0 }
};

/**
 * Wishlist Component
 *
 * @param {object[]} props.list - list of wishlist
 * @since 2021.12.09
 * @returns {ReactNode}
 */
const Wishlist = ({ list }) => {
  const [show, toggleShow] = useState(false);

  const onClickToggle = useCallback(
    (e) => {
      e.preventDefault();
      if (list.length > 0) {
        toggleShow(!show);
      }
    },
    [list.length, show]
  );

  useEffect(() => {
    if (list.length === 0) toggleShow(false);
  }, [list]);

  return (
    <div>
      {list.length > 0 && <WishlistContainer list={list} show={show} />}
      <Transition in={list.length > 0} timeout={duration} mountOnEnter>
        {(state) => (
          <button
            type="button"
            className={styles['wishlist-button']}
            onClick={onClickToggle}
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <span className="material-icons">local_mall</span>
            {list.length > 0 && <span className="badges">{list.length}</span>}
          </button>
        )}
      </Transition>
    </div>
  );
};

Wishlist.propTypes = {
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

export default Wishlist;
