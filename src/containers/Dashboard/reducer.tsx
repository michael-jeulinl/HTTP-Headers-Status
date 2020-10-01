/*
 * DashboardReducer
 *
 * The reducer takes care of our requests and their status.
 * It use reqId to handle the update.
 *
 */

import { getCurDate } from '../../utils';

export type Action =
    { type: 'PENDING'; reqId: number, reqUrl: string }
  | { type: 'SUCCESS'; reqId: number; payload: any }
  | { type: 'ERROR'; reqId: number  };

export interface State {
  reqId: number;
  reqDate: string;
  reqUrl: string;
  isLoading: boolean;
  isError: boolean;
  data?: any;
}

const reqReducer = (state: State[], action: Action): State[] => {
  switch (action.type) {
    case 'PENDING':
      return [
        ...state,
        {
          reqId: action.reqId,
          reqDate: getCurDate(),
          reqUrl: action.reqUrl,
          isLoading: true,
          isError: false
        }
      ];
    case 'SUCCESS':
      return state.map((req) => req.reqId === action.reqId
          ? { ...req, isLoading: false, isError: false, data: action.payload }
          : req);
    case 'ERROR':
      return state.map((req) => req.reqId === action.reqId
          ? { ...req, isLoading: false, isError: true }
          : req);
    default:
      throw new Error('Action not supported');
  }
};

export default reqReducer;
