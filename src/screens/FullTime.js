
import React from 'react'
import { Text, View,TouchableOpacity,ScrollView } from 'react-native';
import PermanentJob from './PermanentJobList';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


function FullTime({navigation}) {
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
       <View style={{paddingTop: 20}}><Text style={{fontSize:22, fontWeight:'bolder'}}>Find FullTime jobs here</Text></View>
         
            
            <PermanentJob/>
            </ScrollView>
            
        </View>
        
    )
}
export default FullTime







