/**
 * Gen SDK Instance
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 2021.12.11
 */
export const getSDKInstance = () =>
  new Promise((resolve) => {
    const interval = setInterval(() => {
      if (typeof ReactSDKWidget !== 'undefined') {
        resolve(ReactSDKWidget);
        clearInterval(interval);
      }
    }, 1000);
  });

/**
 * Setup SDK
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 2021.12.11
 */
export const setSDK = () => {
  const script = document.createElement('script');
  script.setAttribute('crossorigin', '');
  script.setAttribute('src', process.env.REACT_APP_WIDGET_FILES);

  document.body.append(script);

  getSDKInstance().then((instance) => {
    instance.init();
  });
};
