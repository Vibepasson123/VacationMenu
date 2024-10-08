import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Fontisto';
import HotelList from '../screens/vm/HotelList';
import SearchScreen from '../screens/vm/SearchScreen';
import { TabBarContainer } from '../styled/styled';
import { useHotelManger } from '../HotelManager/hotel-context';
import FilterList from '../screens/vm/FilterList';

const Tab = createBottomTabNavigator();

interface BottomTabBarProps {
  navigation: any;
  checkProfile?: () => void;
}

const BottomTabBar: React.FC<BottomTabBarProps> = () => {
  return (
    // eslint-disable-next-line react/no-unstable-nested-components
    <Tab.Navigator  tabBar={(props) => <TabBar {...props} /> } >
      <Tab.Screen name="Hotel" component={HotelList} options={{ headerShown: false }} />
      <Tab.Screen name="Search"  component={SearchScreen} options={{ headerShown: false }} />
      <Tab.Screen
       name="Favorite"
       component={FilterList}
       options={{ headerShown: false }}
       initialParams={{ fav: true, title: 'Favorites' }}
        />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

interface TabBarProps {
  state: any;
  navigation: any;
}

const TabBar: React.FC<TabBarProps> = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Home');
  const { handleSearchChange } = useHotelManger();
  const { routes } = state;

  const renderColor = (currentTab: string): string => (currentTab === selected ? 'white' : '#154341');
  const activeState = (currentTab: string): boolean => currentTab === selected;

  const handlePress = (activePath: string, index: number) => {
    if (state.index !== index) {
      setSelected(activePath);
      navigation.navigate(activePath);
      handleSearchChange({ searchType: 'reset',
        value:'null'});
    }
  };

  return (
    <TabBarContainer>
      {routes.map((route: any, index: number) => (
        <TabContent
          key={route.key}
          tab={route}
          color={renderColor(route.name)}
          navState={activeState(route.name)}
          onPress={() => handlePress(route.name, index)}
        />
      ))}
    </TabBarContainer>
  );
};
interface TabContentProps {
  color: string;
  tab: any;
  navState: boolean;
  onPress: () => void;
}

const TabContent: React.FC<TabContentProps> = ({ color, tab, onPress, navState }) => {
  let iconName: string = '';
  switch (tab.name) {
    case 'Hotel':
      iconName = 'hotel';
      break;
    case 'Search':
      iconName = 'search';
      break;
    case 'Favorite':
      iconName = 'favorite';
      break;
    default:
      iconName = '';
      break;
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: navState ? withTiming('#60A5FA') : withTiming('transparent'),
      width: navState ? withTiming(95) : withTiming(30),
    };
  });

  const labelStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(navState ? 1 : 0),
      transform: [
        {
          translateX: withTiming(navState ? 0 : 170),
        },
      ],
    };
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[styles.tabItem, animatedStyle]}>
        <Icon name={iconName} size={23} color={navState ? color : 'white'} />
        <Animated.Text style={[styles.label, labelStyle]}>
          {navState ? tab.name : null}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 25,
    height: 35,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
  },
});
