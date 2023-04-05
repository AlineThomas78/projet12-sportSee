/**
 * A class for formatting protein data.
 * @class
 */
class FormatProteineData {
  /**
   * Creates an instance of the FormatProteineData class.
   * @param {Object} data - The data to format.
   * @param {Object} data.keyData - The key data to format.
   * @param {number} data.keyData.proteinCount - The protein count to format.
   */
  constructor(data) {
    /**
     * The formatted data.
     * @type {Object}
     * @property {Object} keyData - The formatted key data.
     * @property {string} keyData.proteinCount - The formatted protein count, with a "g" suffix and formatted for the US locale.
     */
    this.data = {
      ...data,
      keyData: {
        ...data?.keyData,
        proteinCount: data?.keyData?.proteinCount.toLocaleString("en-US") + " g"
      }
    };
  }
}

export { FormatProteineData };
