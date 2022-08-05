import axios from 'axios';
import { endpoints } from '@config';
import { StockPayload, StockResponse } from '@types';

const saveTrade = (payload: StockPayload) => axios.post<StockResponse>(
  endpoints.SAVE_TRADE,
  payload,
);

const fetchTrades = () => axios.get<StockResponse>(
  endpoints.FETCH_TRADES,
);

export {
  saveTrade,
  fetchTrades,
};
