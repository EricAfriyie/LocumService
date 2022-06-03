
import React from 'react'
import { Text, View,TouchableOpacity,ScrollView } from 'react-native';
import TemporalJob from '../screens/TemporalJobsList';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


function LocumOffers({navigation}) {
    return (
        <View  style={{ padding: 10, paddingTop:50,flex: 1,backgroundColor:'white'  }}>
         <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        
         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={24}/>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity>
           <Ionicons name="notifications-outline" size={24}/>
        </TouchableOpacity>
        </View>

       
      </View>
       <ScrollView >
       <View style={{paddingTop: 20}}><Text style={{fontSize:22, fontWeight:'bolder'}}>Find Temporal jobs here</Text></View>
         
            
            <TemporalJob/>
            </ScrollView>
            
        </View>
        
    )
}
export default LocumOffers







