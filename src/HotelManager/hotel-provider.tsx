import React, { useReducer, useCallback, useMemo, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { hotelManagerReducer, initialHotelListState } from './hotelManagerReducer';
import { HotelMangerContext } from './hotel-context';
import { HotelManager } from '../utils/GlobalValues';
import Loader from '../components/loader';
import { Alert, StyleSheet } from 'react-native';
import { LoaderWrapper } from '../styled/styledComponents';

interface FetchProviderProps {
  children: ReactNode;
}
export interface SearchParams {
  searchType: 'searchByWord' | 'sortBy' | 'filterBy' | 'reset';
  value: string | {
    checkInFrom?: string;
    checkOutTo?: string;
    priceRange?: {
      min: number;
      max: number;
    };
  };
}

export const HotelManagerProvider = ({ children }: FetchProviderProps) => {
  const [state, dispatch] = useReducer(hotelManagerReducer, initialHotelListState);
  const [searchText, setSearchText] = useState('');
  const [filteredHotelList, setFilteredHotelList] = useState<any[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    getHotelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getHotelData = useCallback(async () => {
    if (!state.hotelList) {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await axios.get(HotelManager.DataUrl);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        setFilteredHotelList(response.data);
      } catch (error: any) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    }
  }, [state.hotelList]);

  const addToFavorites = useCallback((id: number) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(favoriteId => favoriteId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  }, []);
  const handleSearchChange = useCallback((params: SearchParams) => {
    const { searchType, value } = params;

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }


    let updatedHotelList = [...(state.hotelList || [])];

    switch (searchType) {
      case 'searchByWord':

        setSearchText(value as string);


        const newTimeout = setTimeout(() => {
          if (value) {

            updatedHotelList = updatedHotelList.filter((hotel: any) =>
              hotel.name.toLowerCase().includes((value as string).toLowerCase()) ||
              hotel.location.address.toLowerCase().includes((value as string).toLowerCase()) ||
              hotel.location.city.toLowerCase().includes((value as string).toLowerCase())
            );

            const filteredSuggestions = updatedHotelList.map((hotel: any) => hotel.name).slice(0, 3);
            setSuggestions(filteredSuggestions);
          } else {

            setSuggestions([]);
          }

          setFilteredHotelList(updatedHotelList);
        }, 500);
        setDebounceTimeout(newTimeout);
        break;

      case 'sortBy':

        switch (value) {
          case 'Price':
            updatedHotelList.sort((a: any, b: any) => a.price - b.price);
            break;
          case 'Name':
            updatedHotelList.sort((a: any, b: any) => a.name.localeCompare(b.name));
            break;
          case 'User Rating':
            updatedHotelList.sort((a: any, b: any) => b.userRating - a.userRating);
            break;
          case 'Stars':
            updatedHotelList.sort((a: any, b: any) => b.stars - a.stars);
            break;
          case 'City':
            updatedHotelList.sort((a: any, b: any) => a.location.city.localeCompare(b.location.city));
            break;
          default:
            updatedHotelList = [...(state.hotelList || [])];
            break;
        }

        setFilteredHotelList(updatedHotelList);
        break;

      case 'filterBy':
        const { checkInFrom, checkOutTo, priceRange } = value as {
          checkInFrom?: string;
          checkOutTo?: string;
          priceRange?: { min: number; max: number };
        };
        if (!checkInFrom && !checkOutTo && !priceRange) {
          Alert.alert('Invalid Filter', 'Please provide at least one filter.');
          return[];
        }
        if (checkInFrom) {
          const searchCheckInFrom = parseInt(checkInFrom.replace(':', ''), 10);
          updatedHotelList = updatedHotelList.filter(hotel => {
            const hotelCheckInFrom = parseInt(hotel.checkIn.from.replace(':', ''), 10);
            return hotelCheckInFrom >= searchCheckInFrom;
          });
        }

        if (checkOutTo) {
          const searchCheckOutTo = parseInt(checkOutTo.replace(':', ''), 10);
          updatedHotelList = updatedHotelList.filter(hotel => {
            const hotelCheckOutTo = parseInt(hotel.checkOut.to.replace(':', ''), 10);
            return hotelCheckOutTo <= searchCheckOutTo;
          });
        }

        if (priceRange && priceRange.max) {
          updatedHotelList = updatedHotelList.filter(
            hotel => hotel.price >= priceRange.min && hotel.price <= priceRange.max
          );
        }
        setFilteredHotelList(updatedHotelList);
        break;
      case 'reset':
        setSearchText('');
        setFilteredHotelList(state.hotelList || []);
        setSuggestions([]);
        break;

      default:
        break;
    }
  }, [debounceTimeout, state.hotelList]);

  const contextValue = useMemo(() => ({
    getHotelData,
    hotelList: filteredHotelList,
    loading: state.loading,
    error: state.error,
    searchText,
    suggestions,
    addToFavorites,
    favorites,
    handleSearchChange,
  }), [getHotelData, filteredHotelList, state.loading, state.error, searchText, favorites, suggestions,addToFavorites, handleSearchChange]);

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
