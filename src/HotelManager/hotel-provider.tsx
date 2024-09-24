import React, {  useReducer, useCallback, useMemo, ReactNode } from 'react';
import axios from 'axios';
import { hotelManagerReducer, initialHotelListState } from './hotelManagerReducer';
import { HotelMangerContext } from './hotel-context';
import { HotelManager } from '../utils/GlobalValues';
import Loader from '../components/loader';
import { StyleSheet } from 'react-native';
import { LoaderWrapper } from '../styled/styledComponents';



interface FetchProviderProps {
  children: ReactNode;
}


export const HotelManagerProvider = ({ children }: FetchProviderProps) => {
  const [state, dispatch] = useReducer(hotelManagerReducer, initialHotelListState);

  const getHotelData = useCallback(async () => {
    if(!state.hotelList){
      dispatch({ type: 'FETCH_INIT' });

      try {
        const response = await axios.get(HotelManager.DataUrl);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error: any) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    }

  }, [state.hotelList]);

  const contextValue = useMemo(() => ({
    getHotelData,
    hotelList: state.hotelList,
    loading: state.loading,
    error: state.error,
  }), [state.hotelList, state.loading, state.error, getHotelData]);

  return (
    <HotelMangerContext.Provider value={contextValue}>
      {state.loading && (
        <LoaderWrapper style={[StyleSheet.absoluteFill]} pointerEvents="none">
          <Loader />
        </LoaderWrapper>
      )}
      {children}
    </HotelMangerContext.Provider>
  );
};
