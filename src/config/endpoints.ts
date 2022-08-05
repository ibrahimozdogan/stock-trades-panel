const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3333' : 'https://stock-api.ibrahimozdogan.com';
const ENDPOINTS = {
  SAVE_TRADE: `${BASE_URL}/trades`,
  FETCH_TRADES: `${BASE_URL}/trades`,
};

export default ENDPOINTS;
