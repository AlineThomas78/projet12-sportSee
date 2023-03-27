/**
 * A class for formatting activity data.
 * @class
 */
class FormatActivityData {
    /**
     * Creates an instance of the FormatActivityData class.
     * @param {Object} data - The data to format.
     * @param {Object[]} data.sessions - The sessions to format.
     * @param {string} data.sessions.day - The day of the session.
     */
    constructor(data) {
        /**
         * The formatted data.
         * @type {Object}
         * @property {Object[]} sessions - The formatted sessions.
         * @property {string} sessions.day - The day of the session, with only the last character.
         */
        this.data = {
            ...data,
            sessions: data?.sessions?.map(session => ({
                ...session,
                day: session.day.substr(session.day.length - 1)
            }))
        };
    }
}

export { FormatActivityData };