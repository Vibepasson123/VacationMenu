import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { PageBody, Pagesection } from '../../styled/styled';
import SelectPicker from '../../components/SelectPicker';
import VmSlider from '../../components/VmSlider';
import VmButton from '../../components/VmButton';
import { useHotelManger } from '../../HotelManager/hotel-context';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation() as any;
  const { handleSearchChange } = useHotelManger();
  const [checkInTime, setCheckInTime] = useState<number | null>(null);
  const [checkOutTime, setCheckOutTime] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<number>(0);

  const pickerData = Array.from({ length: 23 }, (_, i) => {
    const hour = i + 1;
    return { label: hour.toString().padStart(2, '0'), value: hour };
  });
  const handleSubmit = () => {
    if (!checkInTime && !checkOutTime && priceRange === 0) {
      Alert.alert('Please select at least one filter: check-in time, check-out time, or price range.');
      return;
    }
    handleSearchChange({
      searchType: 'filterBy',
      value: {
        checkInFrom: checkInTime ? `${checkInTime}:00` : undefined,
        checkOutTo:  checkOutTime ? `${checkOutTime}:00` : undefined,
        priceRange: {
          min: 0,
          max: priceRange,
        },
      },
    });
    navigation.navigate('HoltelViewList');
    console.log('Check-In Time:', checkInTime ? `${checkInTime}:00` : 'Not selected');
    console.log('Check-Out Time:', checkOutTime ? `${checkOutTime}:00` : 'Not selected');
    console.log(`Selected price range: ${priceRange} €`);
  };
  return (
    <>
      <PageHeader istabScreen HeaderText={'Search'} />
      <PageBody>
        <Pagesection >
          <SelectPicker
            placeholder="Pick Check-In"
            iconName="calendar-outline"
            items={pickerData}
            onValueChange={(val) => setCheckInTime(val)}
          />
          <SelectPicker
            placeholder="Pick Check-Out"
            iconName="calendar-outline"
            items={pickerData}
            onValueChange={(val) => setCheckOutTime(val)}
          />
        </Pagesection>
        <Pagesection >
          <VmSlider
            minValue={0}
            maxValue={1000}
            step={10}
            currentValue={priceRange}
            onValueChange={(value) => setPriceRange(value)} />
        </Pagesection>
        <Pagesection >
          <VmButton title="Search" onPress={handleSubmit} />
        </Pagesection>
      </PageBody>
    </>
  );
};

export default SearchScreen;

