
import React,{useState,useEffect} from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Saved from '../screens/Saved';
import Search from '../screens/Search';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export default function LocumDrawer() {
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
        <Tab.Screen name="Home" component={Home} />
         <Tab.Screen name="Search" component={Search} />
       
        
         <Tab.Screen name="Saved" options={{ tabBarBadge: data.length }} component={Saved} />
          <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}