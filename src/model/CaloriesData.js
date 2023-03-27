/**

Class representing a formatted calorie data.
Creates a new formatted calorie data.
@param {Object} data - The data to be formatted.
/*
The formatted data.
@type {Object}
@property {Object} keyData - The key data.
@property {string} keyData.calorieCount - The formatted calorie count with Kcal unit.
*/
class FormatCalorieData {

    constructor(data) {
      this.data = {
        ...data,
        keyData: {
          ...data?.keyData,
          calorieCount: data?.keyData?.calorieCount.toLocaleString("en-US") + " Kcal"
        }
      };
    }
  }
  
  export { FormatCalorieData };
  