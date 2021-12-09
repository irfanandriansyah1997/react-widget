import React from 'react';
import ReactDOM from 'react-dom';

import EventEmitter from './helper/event-emitter.helper';
import { WishlistProvider } from './hooks/wishlist.hooks';
import { Apps } from './apps';
import { EVENT_ON_ADD_LISTING, EVENT_PAGE } from './constant';

/**
 * React Widget SDK
 *
 * @author Irfan Andriansyah <irfan@99.co>
 * @description react widget sdk for initialize
 * @since 2021.12.04
 */
class ReactSDKWidget {
  /**
   * Initialize React SDK Widget
   *
   * @description initialize react dom render into html body
   * @returns {void}
   */
  static init() {
    ReactDOM.render(
      <WishlistProvider>
        <Apps />
      </WishlistProvider>,
      document.getElementById('widget')
    );
  }

  static setPage(page) {
    EventEmitter.emit(EVENT_PAGE, page);
  }

  static setListing(listing) {
    EventEmitter.emit(EVENT_ON_ADD_LISTING, listing);
  }
}

window.ReactSDKWidget = ReactSDKWidget;
