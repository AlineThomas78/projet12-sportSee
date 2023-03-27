/**
 * A class for formatting lipid data.
 * @class
 */
class FormatLipideData {
  /**
   * Creates an instance of the FormatLipideData class.
   * @param {Object} data - The data to format.
   * @param {Object} data.keyData - The key data to format.
   * @param {number} data.keyData.lipidCount - The lipid count to format.
   */
  constructor(data) {
    /**
     * The formatted data.
     * @type {Object}
     * @property {Object} keyData - The formatted key data.
     * @property {string} keyData.lipidCount - The formatted lipid count, with a "g" suffix and formatted for the US locale.
     */
    this.data = {
      ...data,
      keyData: {
        ...data?.keyData,
        lipidCount: data?.keyData?.lipidCount.toLocaleString("en-US") + " g"
      }
    };
  }
}

export { FormatLipideData };
