/**
 * A class for formatting radial data.
 * @class
 */
class FormatRadialData {
  /**
   * Creates an instance of the FormatRadialData class.
   * @param {Object} data - The data to format.
   * @param {number} data.todayScore - The score to format as a percentage.
   */
  constructor(data) {
    /**
     * The formatted data.
     * @type {Object}
     * @property {number} todayScore - The formatted score as a percentage with no decimal places.
     */
    this.data = {
      ...data,
      todayScore: [
        {
          name: "todayScore",
          value: (data?.todayScore) * 100
        },
        {
          name: "scoreRestant",
          value: 100 - (data?.todayScore) * 100
        },
      ]
    };
  }
}

export { FormatRadialData };