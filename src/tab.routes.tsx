import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Home from './screens/Home';
import Category from './screens/Category';
import Search from './screens/Search';
import Download from './screens/Download';
import Favorite from './screens/Favorite';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
        style: {
            backgroundColor: '#121212',
            borderTopColor: '#121212',
        },
        activeTintColor: '#e2e2e2',
        labelStyle: {
            fontSize: 10,
            fontWeight: '600',
        },
        inactiveTintColor: '#666666',
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <AntDesign size={20} name="home" color={color} />,
        title: 'Inicio',
      }}
      name="Home"
      component={Home}
    />    

    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <AntDesign size={20} name="bars" color={color} />,
        title: 'Categorias',
      }}
      name="Category"
      component={Category}
    />
    
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <AntDesign size={20} name="search1" color={color} />,
        title: 'Buscar',
      }}
      name="Search"
      component={Search}
    />

    {/* <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <AntDesign size={20} name="download" color={color} />,
        title: 'Downloads',
      }}
      name="Download"
      component={Download}
    /> */}

    {/* <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <AntDesign size={20} name="star" color={color} />,
        title: 'Favoritos',
      }}
      name="Favorite"
      component={Favorite}
    /> */}
  </Tab.Navigator>
)

export default TabRoutes;
