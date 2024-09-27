import { StyleSheet } from 'react-native';
import React from 'react';
import { HeaderContainer, IconContainer, PageHeaderTitleContainer, RightIconsContainer } from '../styled/styled';
import Icon from 'react-native-vector-icons/Ionicons';
import PulseText from './PulseText';
import { useNavigation } from '@react-navigation/native';
interface PageHeaderProps {
	HeaderText: string;
	istabScreen: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ HeaderText, istabScreen }) => {
	const navigation = useNavigation();
	return (
		<HeaderContainer style={styles.headerContainer}>
			<RightIconsContainer >
			{!istabScreen && (
				<IconContainer radius={50} style={styles.iconContainer} onPress={() => navigation.goBack()}>
					<Icon name="arrow-back" size={24} color="white" />
				</IconContainer>)}
			</RightIconsContainer>
			<PageHeaderTitleContainer isTabScreen={istabScreen}>
				<PulseText message={HeaderText} color="white" fontSize={18} />
			</PageHeaderTitleContainer>
		</HeaderContainer>
	);
};
export default PageHeader;

const styles = StyleSheet.create({
	headerContainer: {
		height: '15%',
		alignItems: 'flex-start',
		padding: 30,
	},
	iconContainer: {
		top: 10,
	},
});
