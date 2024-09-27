
import React from 'react';
import Header from '../../components/Header';
import HotelListComponent from '../../components/HotelListComponent';
import { EmptyScreen } from '../../styled/styled';

const HotelList: React.FC = () => {
  return (
    <EmptyScreen>
      <Header />
      <HotelListComponent />
    </EmptyScreen>
  );
};
export default React.memo(HotelList);
