
import React from 'react';
import { CardContainer, CardImageContainer, ImageView } from '../styled/styled';



const HotelCard = ({ images }: any) => {

  return (
    <CardContainer >
      <CardImageContainer>
        <ImageView source={{ uri: images?.[0] }} resizeMode={'cover'} />
      </CardImageContainer>
    </CardContainer>
  );
};

export default HotelCard;


