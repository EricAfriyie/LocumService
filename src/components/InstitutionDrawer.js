
import React,{useState,useEffect} from 'react';
import InstHome from '../screens/InstHome';
import InstProfile from '../screens/InstProfile';
import InstSaved from '../screens/InstSaved';
import InstSearch from '../screens/InstSearch';


import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import ListV from '../screens/listV';
const Tab = createBottomTabNavigator();

export default function InstitutionDrawer() {


  
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch('https://loccumx.herokuapp.com/api/v1/job/?format=json')
      .then((response) => response.json())
      .then((json) => setData(json))
     
      
      setData(data); 
  },[])

  
  
 

  
  return (
     <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home': 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }

             else if (route.name === 'Saved') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FCAA2D',
          tabBarInactiveTintColor: '#2B2B2B',
        })}
      >
        <Tab.Screen name="Home" component={InstHome} />
         <Tab.Screen name="Search" component={InstSearch} />
       
        
         <Tab.Screen name="Saved" options={{ tabBarBadge: data.length }} component={InstSaved} />
          <Tab.Screen name="Profile" component={InstProfile} />
      </Tab.Navigator>
  );
}