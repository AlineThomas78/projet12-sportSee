/**
 * A class for formatting glucose data.
 * @class
 */
class FormatGlucideData {
  /**
   * Creates an instance of the FormatGlucideData class.
   * @param {Object} data - The data to format.
   * @param {Object} data.keyData - The key data to format.
   * @param {number} data.keyData.carbohydrateCount - The carbohydrate count to format.
   */
  constructor(data) {
      /**
       * The formatted data.
       * @type {Object}
       * @property {Object} keyData - The formatted key data.
       * @property {string} keyData.carbohydrateCount - The formatted carbohydrate count, with a "g" suffix and formatted for the US locale.
       */
      this.data = {
          ...data,
          keyData: {
              ...data?.keyData,
              carbohydrateCount: data?.keyData?.carbohydrateCount.toLocaleString("en-US") + "g"
          }
      };
  }
}

export { FormatGlucideData };
