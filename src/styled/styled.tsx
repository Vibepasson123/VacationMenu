import styled, { css } from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { Animated, Dimensions, Image, TouchableOpacity } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');
interface CardNewTagImageProps {
  isAddBottom?: boolean;
}

interface CardContainerProps {
  cardWidth?: string;
}
interface SearchContainerProps {
  isFocused: boolean;
}

export const PageContainer = styled.View`
  flex:1;
  background-color: #fff;

`;
export const MainTitleText = styled.Text`
  width: 65%;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #222222;

`;
export const SectionTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #222222;
  margin-top: 28px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-family: CircularStd-Medium;
`;
export const CategoryTitle = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #7e7e7e;
`;
export const FavCardContainer = styled.TouchableOpacity<{ ml?: boolean; height?: boolean }>`
  width: 190px;
  height: ${(props) => (props.height ? '280px' : '280px')};
  min-height: 290px;
  background-color: white;
  border-radius: 15px;
  margin-left: 16px;
  margin-bottom: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 13px;
`;
export const CardColContainer = styled.TouchableOpacity<{ ml?: boolean }>`
  width: 170px;
  background-color: white;
  border-radius: 15px;
  margin-left: 15px;
  margin-bottom: 20px;
  margin-right: 15px;
  min-height: 290px;
`;
export const CardColImage = styled(Image)`
  height: undefined;
  width: 100%;
  aspect-ratio: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const CardColLottie = styled(LottieView).attrs({
  resizeMode: 'cover', // Add any other LottieView attributes here
})`
  width: 100%;
  aspect-ratio: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: 'red';
`;
export const CardNewTagImage = styled(Image) <CardNewTagImageProps>`
  position: absolute;
  height: ${(props) => (props.isAddBottom ? '15%' : '25%')};
  width: ${(props) => (props.isAddBottom ? '25%' : '32%')};
  right: 0;
  aspect-ratio: 1;
  bottom: ${(props) => (props.isAddBottom ? '82%' : '70px')};
`;

export const CardImageContainer = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  overflow: hidden;
`;
export const FavCardImage = styled(Image)`
  height: undefined;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
`;
export const FavTitleWrapper = styled.View`
  padding: 12px;
`;

export const CourseTitle = styled.Text`
  font-size: 16px;
  width: 124px;

  font-weight: 700;
  line-height: 24px;
  color: #222222;
`;

export const TimeText = styled.Text`
  font-size: 12px;
  margin-left: 4px;
`;
export const CardFavoriteContainer = styled.TouchableOpacity`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 20px;
  right: 16px;
  z-index: 1;
`;

export const CardContainer = styled(TouchableOpacity) <CardContainerProps>`
  width:${(props) => (props.cardWidth ? `${props.cardWidth}%` : '95%')};
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  background-color: white;
  border-radius: 16px;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-self: center;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 9px;
  shadow-opacity: 0.5;
  shadow-radius: 8px;
  elevation: 5;
  
`;

export const ImageView = styled(Image)`
  height: 94px;
  width: 105px;
  border-radius: 12px;

`;
export const TextsWrapper = styled.View`
  flex: 1;
  padding-left: 12px;
  padding-right: 12px;
`;
export const MainCardTitle = styled.Text<{ bigText?: boolean; marginTop?: number }>`
  /* margin-bottom: 4px; */
  /* width: 150px; */
  /* height: 24px; */
  font-family: CircularStd-Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  ${(props) =>
    props.bigText &&
    css`
      max-width: 250px;
    `}
`;
export const CardDescription = styled.Text<{
  textAligment?: 'left' | 'right' | 'center';
}>`
  width: 160px;
  height: 36px; 
  font-family: CircularStd-Medium;
  font-style: normal;
  margin-bottom: 5px;
  text-align: ${({ textAligment }) => textAligment || 'left'};
  font-size: 12px;
  line-height: 18px;
  color: #7e7e7e;
`;
export const IconDetailHeaderTail = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const ContainerFooter = styled.View<{ background: any }>`
  background-color: ${({ background }) => background};
  flex: 1;
  border-top-left-radius: 75px;
  padding-left: 20px;
  padding-right: 20px;
`;


export const Title = styled.Text`
  font-size: 17px;
  line-height: 24px;
  color: #000;
  width: 291px;
  text-align: center;
`;
export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  width: 291px;
  text-align: center;
  text-decoration-line: underline;
  top: -5px;
  margin-bottom: 27px; */
`;

export const StepperText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #222222;
`;
export const CelebrationButtonContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 5px;
  height: 67px;
  width: 67px;
  background-color: #77cac6;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 5px;
  shadow-opacity: 1;
  shadow-radius: 4px;
  elevation: 5;
  align-items: center;
  justify-content: center;
  border-radius: 33.5px;
  z-index: 9999999;
`;
export const CelebrationButtonText = styled.Text`
  font-size: 40px;
  left: 6px;
`;

export const AnimatedContainer = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const CarouselImage = styled.Image`
  position: relative;
  width: 100%;
  height: 100%;
  resize-mode: cover;
  border-radius: 8px;
  overflow: hidden;
`;

export const CarouselIndicatorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const CarouselAnimatedDot = styled(Animated.View)`
  height: 8px;
  border-radius: 4px;
  margin-horizontal: 4px;
`;

export const HeaderContainer = styled.View`
  background-color: #4caf50;
  padding: 20px;
  padding-top: 50px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 9px;
  shadow-opacity: 0.5;
  shadow-radius: 8px;
  elevation: 5;
  z-index:10;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const LocationRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocationText = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 6px;
`;

export const IconContainer = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 8px;
  border-radius: 10px;
`;

export const SearchContainer =  styled.View<SearchContainerProps>`
  width: 85%;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${(props) => (props.isFocused ? 'gray' : '#ccc')};
  padding: 10px;
  border-radius: 25px;
  background-color: #fff;
  shadow-color: ${(props) => (props.isFocused ? 'gray' : 'transparent')};
  shadow-offset: 0px 2px;
  shadow-opacity: ${(props) => (props.isFocused ? 0.8 : 0)};
  shadow-radius: 3px;
  elevation: 5;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
  
`;

export const RightIconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SuggestionsContainer = styled.View`
  background-color: white;
  border-radius: 10px;
  elevation: 3;
  margin-top: 5px;
  padding: 10px;
  z-index: 1000;
  width: ${screenWidth * 0.85}px;
  position: absolute;
  top: 50px;
`;

export const SuggestionText = styled.Text`
  padding-vertical: 10px;
  padding-horizontal: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: #ccc;
  font-size: 16px;
`;
