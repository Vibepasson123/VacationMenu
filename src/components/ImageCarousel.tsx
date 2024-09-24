import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  FlatList,
  Image,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  FlatList as FlatListType,
  StyleSheet,
  Dimensions,
} from 'react-native';
import NoImage from './NoImage';


interface ImageCarouselProps {
  images?: string[];
  height?: number;
  width?: number;
  animation?: boolean;
  autoSlide?: boolean;
  showDots?: boolean;
  dotsColor?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images = [],
  height = 250,
  width = Dimensions.get('window').width,
  animation = false,
  autoSlide = false,
  showDots = false,
  dotsColor = 'gray',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatListType<any>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const tiltAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoSlide && images.length > 0) {
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex });
        setCurrentIndex(nextIndex);
        if (animation) {startTiltAnimation();}
      }, 3000);
    }

    return () => {
      if (interval) {clearInterval(interval);}
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, images.length, autoSlide, animation]);

  const startTiltAnimation = () => {
    if (animation) {
      Animated.sequence([
        Animated.timing(tiltAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(tiltAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [{ nativeEvent: { contentOffset: { x: scrollX } } }],
      { useNativeDriver: false }
    )(event);
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const tiltInterpolate = tiltAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '8deg'],
  });

  if (images.length === 0) {
    return <NoImage />;
  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <Animated.View
            style={[styles.imageContainer, { transform: [{ rotate: animation ? tiltInterpolate : '0deg' }], height, width }]}
          >
            <Image source={{ uri: item }} style={styles.image} />
          </Animated.View>
        )}
      />
      {showDots && (
        <View style={styles.indicatorContainer}>
          {images?.map((_, imageIndex) => {
            const dotWidth = scrollX.interpolate({
              inputRange: [
                width * (imageIndex - 1),
                width * imageIndex,
                width * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width: dotWidth, backgroundColor: dotsColor }]}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  image: {
    position: 'relative',
    width: '98%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  normalDot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default ImageCarousel;
