import styled, { css } from 'styled-components/native';



import LottieView from 'lottie-react-native';
import { Image, TouchableOpacity } from 'react-native';




interface CardNewTagImageProps {
  isAddBottom?: boolean;
}

interface CardContainerProps {
  cardWidth?: string;
}


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
/* */
export const CategoryTitle = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #7e7e7e;
`;
// export const FavCardContainer = styled.TouchableOpacity<{
//   backgroundColor?: string;
//   select?: boolean;
// }>`
//   background-color: ${props => (props.select ? props.backgroundColor : '#fff')};
//   border-radius: 20px;
//   padding: 4px 12px;
//   height: 36px;
//   margin-left: 12px;
//   justify-content: center;
//   align-items: center;
//   margin-top: 28px;
//   ${props =>
//     props.select &&
//     css`
//       border: 1px solid #5cb179;
//     `}
// `;

export const FavCardContainer = styled.TouchableOpacity<{ ml?: boolean; height?: boolean }>`
  width: 190px;
  height: ${(props) => (props.height ? '280px' : '280px')}; */
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
export const CardNewTagImage = styled(Image)<CardNewTagImageProps>`
  position: absolute;
  height: ${(props) => (props.isAddBottom ? '15%' : '25%')};
  width: ${(props) => (props.isAddBottom ? '25%' : '32%')};
  right: 0;
  aspect-ratio: 1;
  bottom: ${(props) => (props.isAddBottom ? '82%' : '70px')};
`;

export const CardImageContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 5px;

 
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

export const CardContainer = styled(TouchableOpacity)<CardContainerProps>`

  width:${(props) => (props.cardWidth ? `${props.cardWidth}%` : '95%')};
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  background-color: gray;
  border-radius: 16px;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-self: center;
  
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
  /* height: 36px; */
  font-family: CircularStd-Medium;
  font-style: normal;
  margin-bottom: 5px;
  text-align: ${({ textAligment }) => textAligment || 'left'};
  /* font-weight: 450; */
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
  /* margin-top: 17px;
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
