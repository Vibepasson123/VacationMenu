/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageCarousel from '../../components/ImageCarousel';
import styled from 'styled-components/native';
import { PriceContainer, PriceContainerTag } from '../../styled/styled';

const HotelDetails: React.FC = () => {
    const navigation = useNavigation() as any;
    const route = useRoute();
    const hotelData = route.params as any;

    return (
        <ScrollContainer>
            <HeaderContainer>
                <ImageCarousel images={hotelData?.item?.gallery} dotsColor={'#93C5FD'} showDots height={300} width={550} animation autoSlide />
                <BackButton onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="white" />
                </BackButton>
            </HeaderContainer>

            <DetailsContainer>
                <InfoRow>
                    <HouseTag>{hotelData?.item?.location?.city}</HouseTag>
                    <RatingContainer>
                        <RatingText>{hotelData?.item?.userRating}</RatingText>
                        <Icon name="star" size={16} color="#FFD700" />
                    </RatingContainer>
                </InfoRow>
                <HouseTitle>{hotelData?.item?.name}</HouseTitle>
                <HouseLocation>{hotelData?.item?.location?.address}</HouseLocation>
                <FacilitiesContainer>
                    <FacilitiesTitle>Facilities</FacilitiesTitle>
                </FacilitiesContainer>
                <FacilitiesRow>
                    <FacilityItem>
                        <Icon name="wifi-outline" size={24} color="#60A5FA" />
                        <FacilityText>free-wifi</FacilityText>
                    </FacilityItem>
                    <FacilityItem>
                        <Icon name="water-outline" size={24} color="#60A5FA" />
                        <FacilityText>2 Bathroom</FacilityText>
                    </FacilityItem>
                    <FacilityItem>
                        <Icon name="car-outline" size={24} color="#60A5FA" />
                        <FacilityText>Car Garage</FacilityText>
                    </FacilityItem>
                </FacilitiesRow>

                <VMInfo>
                    <Icon name="mail-outline" size={24} color="#60A5FA" />
                    <VMDetails>
                        <VMName>{hotelData?.item?.contact?.email}</VMName>
                    </VMDetails>
                    <VMDetails>
                        <VMName>{hotelData?.item?.contact?.phoneNumber}</VMName>
                    </VMDetails>
                    <ContactButton>
                        <Icon name="call" size={20} color="white" />
                    </ContactButton>
                </VMInfo>

                <PriceContainer style={{marginLeft:'55%', marginTop:'15%'}}>
                    <PriceContainerTag height={30} width={50} left={20} backgroundColor={'#F0ABFC'} opacity={0.4} />
                    <PriceContainerTag height={30} width={70} left={-23} backgroundColor={'#FB7185'} opacity={0.5} />
                    <PriceContainerTag height={30} width={70} left={-83} backgroundColor={'#14B8A6'} opacity={0.6} />
                    <Icon style={{ position: 'absolute', left: 35 }} name="pricetag-outline" size={20} color="#E11D48" />
                    <PriceText style={{ position: 'absolute', left: 60 }}> € {hotelData?.item?.price}</PriceText>
                </PriceContainer>

            </DetailsContainer>
        </ScrollContainer>
    );
};

export default HotelDetails;


const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: #EEF2FF;
`;

const HeaderContainer = styled.View`
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 16px;
  background-color: #60A5FA;
  padding: 10px;
  border-radius: 20px;
`;

const DetailsContainer = styled.View`
  padding: 16px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HouseTag = styled.Text`
  background-color: #60A5FA;
  color: white;
  padding-horizontal: 8px;
  padding-vertical: 4px;
  border-radius: 4px;
  font-size: 14px;
`;

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RatingText = styled.Text`
  font-size: 16px;
  margin-right: 4px;
`;

const HouseTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-vertical: 4px;
`;

const HouseLocation = styled.Text`
  font-size: 16px;
  color: #888;
`;

const FacilitiesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 16px;
`;

const FacilitiesTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const FacilitiesRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 16px;
`;

const FacilityItem = styled.View`
  align-items: center;
`;

const FacilityText = styled.Text`
  font-size: 14px;
  margin-top: 4px;
`;

const VMInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const VMDetails = styled.View`
  flex: 1;
  margin-left: 16px;
`;

const VMName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const ContactButton = styled.TouchableOpacity`
  background-color: #60A5FA;
  padding: 10px;
  border-radius: 8px;
`;

const PriceText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
