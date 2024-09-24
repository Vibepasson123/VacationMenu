export interface HotelListState {
  hotelList: any;
    loading: boolean;
    error: string | null;
  }

  export type HotelManagerAction =
    | { type: 'FETCH_INIT' }
    | { type: 'FETCH_SUCCESS'; payload: any }
    | { type: 'FETCH_FAILURE'; payload: string };

  export const initialHotelListState: HotelListState = {
    hotelList: null,
    loading: true,
    error: null,
  };

  export const hotelManagerReducer = (state: HotelListState, action: HotelManagerAction): HotelListState => {
    switch (action.type) {
      case 'FETCH_INIT':
        return { ...state, loading: true, error: null };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, hotelList: action.payload };
      case 'FETCH_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        throw new Error(`Unhandled action type: ${action ? action : 'undefined'}`);
    }
  };
