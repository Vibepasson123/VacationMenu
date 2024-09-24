import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useHotelManger } from '../../HotelManager/hotel-context';
/* import ImageCarousel from '../../components/ImageCarousel'; */
import HotelList from './HotelList';

const VmHome = () => {
    const { getHotelData } = useHotelManger();
    useEffect(() => {
        getHotelData();
    }, [getHotelData]);

    return (
        <View style={styles.container}>
            <HotelList />
        {/*     <ImageCarousel
                images={hotelList?.[4]?.gallery}
                height={300}
                width={350}
                animation
                autoSlide
                showDots
                dotsColor="blue"
            /> */}

        </View>
    );
};

export default VmHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFFF',
    },
});
