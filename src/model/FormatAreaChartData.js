/**
 * A class for formatting line chart data.
 * @class
 */
class FormatAreaChartData {
    /**
     * Creates an instance of the LineChartData class.
     * @param {Object} data - The data to format.
     * @param {Object[]} data.sessions - The sessions to format.
     * @param {number} data.sessions.day - The day of the week of the session (1-7).
     */
    constructor(data) {
        /**
         * The formatted data.
         * @type {Object}
         * @property {Object[]} sessions - The formatted sessions.
         * @property {string} sessions.day - The abbreviation for the day of the week of the session.
         */
        const dayOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        this.data = {
            ...data, 
            sessions: data?.sessions?.map(session => {
                const dayAbbreviation = dayOfWeek[session.day - 1];
                return {
                    ...session,
                    day: dayAbbreviation
                };
            })
        };
    }
}

export { FormatAreaChartData };
