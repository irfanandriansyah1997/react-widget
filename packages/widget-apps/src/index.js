import React from 'react';
import ReactDOM from 'react-dom';

import EventEmitter from './helper/event-emitter.helper';
import { Apps } from './apps';
import { EVENT_PAGE } from './constant';

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
      <React.StrictMode>
        <Apps />
      </React.StrictMode>,
      document.getElementById('widget')
    );
  }

  static setPage(page) {
    EventEmitter.emit(EVENT_PAGE, page);
  }
}

window.ReactSDKWidget = ReactSDKWidget;
