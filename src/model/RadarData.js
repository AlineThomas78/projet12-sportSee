/**
 * A class for formatting radar data.
 * @class
 */
class FormatRadar {
    /**
     * Creates an instance of the FormatRadar class.
     * @param {Object} data - The data to format.
     * @param {Array} data.data - The data to format.
     * @param {number} data.data.kind - The type of the activity.
     */
    constructor(data) {
      /**
       * The formatted data.
       * @type {Object}
       * @property {Array} data - The formatted data.
       * @property {number} data.kind - The type of the activity, formatted in French.
       */
      const kindFrench = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
      };
      
      this.data = {
        data: data?.data?.map((record) => ({
          ...record,
          kind: kindFrench[record.kind]
        }))
      };
    }
  }
  
  export { FormatRadar };
  