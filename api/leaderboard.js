import axios from 'axios';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'i6veMHniNGTeCWJkOuun';

export const getScores = () => axios.get(`${url}${gameId}/scores`);
export const postScores = (user, score) => axios.post(`${url}${gameId}/scores`, { user, score });
