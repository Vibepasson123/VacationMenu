
import React from 'react';
import HotelListComponent from '../../components/HotelListComponent';
import { EmptyScreen } from '../../styled/styled';
import PageHeader from '../../components/PageHeader';
import { useRoute } from '@react-navigation/native';

const FilterList: React.FC = () => {
  const route = useRoute();
   const { fav = false, title = '' } = route.params ?? {} as any;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <EmptyScreen style={{flex:1}}>
      <PageHeader istabScreen={false} HeaderText={title || 'Search Result'} />
      <HotelListComponent fav={fav ? fav : undefined} />
    </EmptyScreen>
  );
};




export default React.memo(FilterList);
