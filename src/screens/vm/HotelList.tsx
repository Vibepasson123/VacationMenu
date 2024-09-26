/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { Animated, StyleSheet, Text, View, Linking, Alert } from 'react-native';
import { useHotelManger } from '../../HotelManager/hotel-context';
import { CardContainer, CardDescription, CardFavoriteContainer, CardFooter, CardImageContainer, EmptyScreen, FlexRow, MainCardTitle, PhoneNumberContainer, PhoneText, PriceContainer, PriceContainerTag, PriceText, TextsWrapper } from '../../styled/styled';
import ImageCarousel from '../../components/ImageCarousel';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const spacing = 10;
const CARD_HEIGHT = 200;

const HotelList: React.FC = () => {
  const { hotelList } = useHotelManger();
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const renderItem = useCallback(({ item, index }: { item: any, index: number }) => {
    const inputRange = [-1, 0, CARD_HEIGHT * index, CARD_HEIGHT * (index + 2)];
    const opacityInputRange = [-1, 0, CARD_HEIGHT * index, CARD_HEIGHT * (index + 0.5)];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    return (
      <MemoizedCard
        item={item}
        scale={scale}
        opacity={opacity}
        onPress={() => console.log(item)}
      />
    );
  }, [scrollY]);

  return (
    <EmptyScreen>
      <Header />
      <Animated.FlatList
        data={hotelList}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={<View style={styles.footer} />}
        getItemLayout={(data, index) => ({
          length: CARD_HEIGHT,
          offset: CARD_HEIGHT * index,
          index,
        })}
      />
    </EmptyScreen>
  );
};

const Card = ({ item, scale, opacity, onPress }: { item: any, scale: any, opacity: any, onPress: () => void }) => {

  const openDialer = async (phoneNumber: string) => {
    const phoneUrl = `tel:${phoneNumber}`;

    try {
      const supported = await Linking.canOpenURL(phoneUrl);
      if (supported) {
        await Linking.openURL(phoneUrl);
      } else {
        Alert.alert('Error', 'Unable to open the dialer');
      }
    } catch (err) {
      console.error('Error opening dialer:', err);
      Alert.alert('Error', 'An unexpected error occurred');
    }
  };
  return (
    <Animated.View style={{ transform: [{ scale }], opacity }}>
      <CardContainer activeOpacity={0.8} onPress={onPress}>
        <CardImageContainer>
          <ImageCarousel images={item?.gallery} height={100} width={150} animation autoSlide />
        </CardImageContainer>
        <TextsWrapper>
          <MainCardTitle>
              {item?.location?.city} <Icon name="location-outline" size={14} color="#0EA5E9" /* onPress={refreshLocation} */ />
          </MainCardTitle>
          <CardDescription numberOfLines={2}>{item?.name.toUpperCase()}</CardDescription>
          <FlexRow spaceBetween>
            <FlexRow>
              <MaterialIcons name="reviews" size={24} color="#16A34A" /* onPress={refreshLocation} */ />
              <Text style={{ marginLeft: 4 }}>{item?.userRating}</Text>
            </FlexRow>
            <FlexRow mr>
              <Icon name="star" size={20} color="#FACC15" /* onPress={refreshLocation} */ />
              <Text style={{ marginLeft: 4 }}>{'122'}</Text>
            </FlexRow>
          </FlexRow>
        </TextsWrapper>
        <CardFavoriteContainer activeOpacity={0.8}>
          <Icon name="bookmark" size={34} color="#F9A8D4" />
        </CardFavoriteContainer>
        <CardFooter>
          <PhoneNumberContainer onPress={() => openDialer(item?.contact?.phoneNumber)}>
            <MaterialIcons name="phone" size={20} color="#15803D" />
            <PhoneText numberOfLines={2}>{item?.contact?.phoneNumber}</PhoneText>
          </PhoneNumberContainer>
          <PriceContainer>
            <PriceContainerTag height={30} width={50} left={20} backgroundColor={'#F0ABFC'} opacity={0.4}/>
            <PriceContainerTag height={30} width={70} left={-23} backgroundColor={'#FB7185'} opacity={0.5}/>
            <PriceContainerTag height={30} width={70} left={-83} backgroundColor={'#14B8A6'} opacity={0.6}/>
            <Icon style={{position:'absolute', left:35}} name="pricetag-outline" size={20} color="#E11D48" />
            <PriceText style={{position:'absolute', left:60}}> € {item?.price}</PriceText>
          </PriceContainer>
        </CardFooter>
      </CardContainer>

    </Animated.View>
  );
};

const MemoizedCard = React.memo(Card, (prevProps, nextProps) => {
  return (
    prevProps.item === nextProps.item &&
    prevProps.scale === nextProps.scale &&
    prevProps.opacity === nextProps.opacity
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    height: 210,
  },
  contentContainer: {
    flexGrow: 1,
    padding: spacing,
    paddingTop: '5%',
    justifyContent: 'flex-start',
  },
});

export default React.memo(HotelList);
