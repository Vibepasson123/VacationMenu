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
interface PriceContainerTagProps {
  height?: number;
  width?: number;
  backgroundColor?: string;
  opacity?: number;
  left?: number;
}
interface IconContainerProps {
  radius?: number;
  backgroundColor?: string;
}


export const PageContainer = styled.View`
  background-color: red;
  height:50px;
  width:100px;
  overflow: hidden;

`;
export const EmptyScreen = styled.View`
 background-color: #EFF6FF;

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
  resizeMode: 'cover',
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
  width: 34px;
  height: 34px;
  position: absolute;
  top: -10px;
  right: 1px;
  z-index: 1;
`;

export const CardContainer = styled(TouchableOpacity) <CardContainerProps>`
  width:${(props) => (props.cardWidth ? `${props.cardWidth}%` : '95%')};
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  background-color: #ECFEFF;
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
  font-weight:600;
  font-size: 16px;
  line-height: 24px;
  color: #44403C;
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
  border-bottom-left-radius: 8px;
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
  background-color: #2563EB;
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

export const IconContainer = styled.TouchableOpacity<IconContainerProps>`
  background-color: ${(props) => props.backgroundColor || 'rgba(255, 255, 255, 0.2)'};
  padding: 8px;
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '10px')};
`;

export const SearchContainer = styled.View<SearchContainerProps>`
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
  font-color: #44403C;
  
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
export const TabIndicatorContainer = styled.View`
  flex-direction: column;
  align-items: center;
  top:7px; 
`;

export const TabTitle = styled.Text`
  font-size: 12px;
`;
export const TabBarContainer = styled.View`
 position: absolute;
  flex-direction: row;
  width: 90%;
  bottom:3%;
  margin-left:5%;
  margin-right:5%;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  background-color: #3B82F6;
  border-radius: 25px;
  border-width: 2px;
  border-color: #3B82F6;
  elevation: 16;
  shadow-color: black;
  shadow-offset: 6.2px -8.2px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
`;
export const FlexRow = styled.View<{
  spaceBetween?: boolean;
  spaceAround?: boolean;
  ml?: boolean;
  mr?: boolean;
  mt?: boolean;
  mb?: boolean;
  center?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
    ${(props) =>
    props.spaceAround &&
    css`
        justify-content: space-around;
      `}
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.ml &&
    css`
      margin-left: 24px;
    `}
  ${(props) =>
    props.mr &&
    css`
      margin-right: 24px;
    `}
  ${(props) =>
    props.mt &&
    css`
      margin-top: 16px;
    `}
     ${(props) =>
    props.mb &&
    css`
      margin-bottom: 16px;
    `}
`;

export const CardFooter = styled.View`
  position: absolute;
  left: 15px;
  bottom: 5%;
  align-self: center;
  flex-direction: row;
  width: 100%;
  height: 30%;
  justify-content: space-between;
`;

export const PhoneNumberContainer = styled.TouchableOpacity`
  position: relative;
  width: 45%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PriceContainer = styled.View`
  position: relative;
  margin-left: 8%;
  width: 55%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius:5px;
`;

export const PhoneText = styled.Text`
  color: #7e7e7e;
  flex-wrap: wrap;
  width: 80%; 
  left:3%;
`;
export const PriceText = styled.Text`
  position: absolute;
  color: blue;
  lex-wrap: wrap;
  width: 80%;
  font-size:29px;
  font-weight:700; 
  left:60px;

`;
export const PriceContainerTag = styled.View<PriceContainerTagProps>`
  position: 'absolute';
  height: ${({ height }) => height || 100}px;
  width: ${({ width }) => width || 250}px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'blue'};
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius:16px;

  opacity: ${({ opacity }) => opacity ?? 0.7}; 
`;
export const ModalWrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8); 
`;

export const ModalContent = styled.View`

  width: 90%;
  padding: 20px;
  border-radius: 20px;
  min-height: 200px;
`;
export const ModalOptionButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
  align-items: center;
`;

export const ModalButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
export const ModalCloseButton = styled.TouchableOpacity`
background-color: red;
padding: 12px;
border-radius: 10px;
align-items: center;
`;
export const ModalButtonContainer = styled.View`
  margin-top: 20px;
`;

export const SortMenuHeader = styled.View`
  flex-direction: row;
  height: 50px;
  width: 65%;
  top: -21px;
  align-items: center;
  justify-content: center;
`;
export const MenuContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.TouchableOpacity<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  width: 85%;
  padding: 20px;
  margin-bottom: -1px; 
  border-radius: 10px;
  transform: rotate(-16deg); 
  justify-content: center;
  align-items: flex-start;
  elevation: 5;
  shadow-color: #000; 
  shadow-offset:0px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
`;

export const IconTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MenuItemText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
`;
export const PageHeaderTitleContainer = styled.View<{ isTabScreen: boolean }>`
  align-self: center;
  bottom: ${({ isTabScreen }) => (isTabScreen ? '-35%' : '15%')};
`;

export const PageBody = styled.View`
  flex:1;
  position: 'relative';
  alignItems: 'center';
  max-height:70%;
  padding-top:2%;
  backgroundColor:#DBEAFE;

`;
export const Pagesection = styled.View`
  flex:1;
  position: 'relative';
  margin-bottom:20px;
  max-height:15%;
  padding-top:2%;
  margin-top:8%;
  width:100%;
  justifyContent:space-around;
  flex-direction:row;
`;