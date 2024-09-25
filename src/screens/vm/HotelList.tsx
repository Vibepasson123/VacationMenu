import React, { useCallback } from 'react';
import { Animated, Image,StyleSheet, View } from 'react-native';
import { useHotelManger } from '../../HotelManager/hotel-context';
import { CardContainer, CardImageContainer } from '../../styled/styled';
import ImageCarousel from '../../components/ImageCarousel';
import Header from '../../components/Header';

const spacing = 10;
const bG = 'https://picsum.photos/900/900';
const CARD_HEIGHT = 200;

const HotelList: React.FC = () => {
  const { hotelList } = useHotelManger();
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const AnimatedCardContainer = Animated.createAnimatedComponent(CardContainer);

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
      <AnimatedCardContainer
        activeOpacity={0.8}
        style={{ transform: [{ scale }], opacity }}
        onPress={() => console.log(item)}
      >
        <CardImageContainer>
          <ImageCarousel
            images={item?.gallery}
            height={100}
            width={150}
            animation
            autoSlide
          />
        </CardImageContainer>
      </AnimatedCardContainer>
    );
  }, [AnimatedCardContainer, scrollY]);

  return (
    <View >
      <Image
        source={{ uri: bG }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
     <Header/>
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
      />
    </View>
  );
};
//TODO:: add thse to styled component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   footer:{
    height: 210,
   },
  contentContainer: {
    flexGrow: 1,
    padding: spacing,
    paddingTop: '5%',
   justifyContent:'flex-start',
   paddingBottom: 20, 
  },
});

export default HotelList;
