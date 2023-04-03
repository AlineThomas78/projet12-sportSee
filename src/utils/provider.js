import currentUser from "./currentUser";

const providerActivity = `Mock/${currentUser}/userActivity.json`;
const providerActivityFromAPI = `http://localhost:3000/user/${currentUser}/activity`;
export { providerActivity };
export { providerActivityFromAPI };

const providerAverageSessions = `Mock/${currentUser}/userAverageSessions.json`;
const providerAverageSessionsFromAPI = `http://localhost:3000/user/${currentUser}/average-sessions`;
export { providerAverageSessions };
export { providerAverageSessionsFromAPI };

const providerPerformance = `Mock/${currentUser}/userPerformance.json`;
const providerPerformanceFromAPI = `http://localhost:3000/user/${currentUser}/performance`;

export { providerPerformance };
export { providerPerformanceFromAPI };

const providerMainData = `Mock/${currentUser}/userMainData.json`;
const providerMainDataFromAPI = `http://localhost:3000/user/${currentUser}`;

export { providerMainData };
export { providerMainDataFromAPI };
