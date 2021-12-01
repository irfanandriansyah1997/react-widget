/**
 * Generate Method
 *
 * @param {string} param - name parameter
 * @returns {void}
 */
export const hello = (param) => `hello world ${param}`;

/**
 * Running Instance
 *
 * @returns {void}
 */
const Initiate = () => {
  console.debug(`${hello(new Date().toISOString())}`);
};

Initiate();
