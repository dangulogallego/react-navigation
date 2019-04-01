import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import ItemList from './ItemList';
import Item from './Item';

import TabAScreen from './TabA';
import TabBScreen from './TabB';
import TabCScreen from './TabC';

import Plain from './Plain';

export const Stack = createStackNavigator({
    ItemList: { screen: ItemList },
    Item: { screen: Item },
}, {
    initialRouteName: 'ItemList',
});

export const Tabs = createBottomTabNavigator({
    TabA: TabAScreen,
    TabB: TabBScreen,
    TabC: Stack,
    // TabC: TabCScreen,
}, {
    order: ['TabA', 'TabB', 'TabC'] 
});

export const Drawer = createDrawerNavigator({
    Stack: { screen: Stack },
    Tabs: { screen: Tabs },
    Plain: { screen: Plain }
});
  