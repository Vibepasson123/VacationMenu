import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PulseText from './PulseText';
import { IconContainer, IconTextContainer, MenuContainer, MenuItem, MenuItemText, SortMenuHeader } from '../styled/styled';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleProp, TextStyle } from 'react-native';

interface StackedMenuProps {
	onClose: () => void;
	onPress: (value: string) => void;
}


const StackedMenu: React.FC<StackedMenuProps> = ({ onClose, onPress }) => {
	const handleMenuItemPress = (value: string) => {
		onPress(value);
	};
	const MenuItems = [
		{id:1, iconName:'pricetag-outline', backgroundColor:'#EFF6FF', menuText:'Price', slidePosition: { right: '0%' } , iconColor:'black'},
		{id:2, iconName:'person-outline', backgroundColor:'#E0F2FE', menuText:'Name', slidePosition: { right: '2%' } , iconColor:'black'},
		{id:3,iconName:'people', backgroundColor:'#BAE6FD', menuText:'User Rating', slidePosition: { right: '4%' } ,iconColor:'black'},
		{id:4,iconName:'star-outline', backgroundColor:'#93C5FD', menuText:'Stars', slidePosition: { right: '6%' } ,iconColor:'black'},
		{id:5,iconName:'location-outline', backgroundColor:'#60A5FA', menuText:'City', slidePosition: { right: '8%' } ,iconColor:'black'},


	];
	return (
		<MenuContainer>
			<SortMenuHeader>
				<PulseText color="#BEF264" message="Sort-By" fontSize={23} />
				<IconContainer
					radius={40}
					backgroundColor={'rgb(220, 38, 38)'}
					style={{ left: '36%', bottom: 8 } as StyleProp<TextStyle>}
					onPress={onClose}
				>
					<MaterialIcons name="close" size={20} color="white" />
				</IconContainer>
			</SortMenuHeader>
			{MenuItems.map((item) => (
        <MenuItem
          key={item.id}
          backgroundColor={item.backgroundColor}
          style={item.slidePosition as StyleProp<TextStyle>}
          onPress={() => handleMenuItemPress(item.menuText)}
        >
          <IconTextContainer>
            <Icon name={item.iconName} size={24} color={item.iconColor} />
            <MenuItemText>{item.menuText}</MenuItemText>
          </IconTextContainer>
        </MenuItem>
      ))}
		</MenuContainer>
	);
};
export default StackedMenu;
