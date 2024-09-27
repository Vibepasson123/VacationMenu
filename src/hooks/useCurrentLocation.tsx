import { useState, useEffect } from 'react';
import GetLocation, { Location } from 'react-native-get-location';
import Geocoder from 'react-native-geocoding';
import { HotelManager } from '../utils/GlobalValues';


Geocoder.init(HotelManager.MAP_API_KEY);

interface UseCurrentLocation {
  location: Location | null;
  loading: boolean;
  error: string | null;
  address: string | null;
  refreshLocation: () => void;
}

const useCurrentLocation = (): UseCurrentLocation => {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  const fetchLocation = () => {
    setLoading(true);
    setError(null);

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((loc: Location) => {
        setLocation(loc);
        reverseGeocodeLocation(loc);
        setLoading(false);
      })
      .catch((err) => {
        const { message } = err;
        setError(message || 'Error fetching location');
        setLoading(false);
      });
  };


  // eslint-disable-next-line @typescript-eslint/no-shadow
  const reverseGeocodeLocation = (location: Location) => {
    Geocoder.from(location.latitude, location.longitude)
      .then((json) => {
        const addressComponent = json.results[0].formatted_address;
        setAddress(addressComponent);
      })
      .catch((err) => {
        console.error('Error in reverse geocoding:', err);
        setError('Error in reverse geocoding');
      });
  };

  useEffect(() => {
    fetchLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    location,
    loading,
    error,
    address,
    refreshLocation: fetchLocation,
  };
};

export default useCurrentLocation;
