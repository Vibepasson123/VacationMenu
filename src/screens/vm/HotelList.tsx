import React from 'react';
import { FlatList, View } from 'react-native';
import { useHotelManger } from '../../HotelManager/hotel-context';
import { CardContainer, CardImageContainer } from '../../styled/styled';
import ImageCarousel from '../../components/ImageCarousel';

const HotelList: React.FC = () => {
    const { hotelList } = useHotelManger();
    const renderItem = ({ item }: { item: any }) => (
        <CardContainer activeOpacity={0.8} onPress={() => console.log(item)}>
            <CardImageContainer>
                <ImageCarousel
                    images={item?.gallery}
                    height={100}
                    width={150}
                    animation
                    autoSlide
                />
            </CardImageContainer>
        </CardContainer>
    );

    return (
        <View>

            <FlatList
                data={hotelList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};



export default HotelList;
