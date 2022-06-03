import React from 'react'
import { Text, View,TouchableOpacity,ScrollView } from 'react-native';
import ListV from '../screens/listV'
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


function InstSaved({navigation}) {
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
       <View style={{paddingTop: 20}}><Text style={{fontSize:22, fontWeight:'bolder'}}>Find all your saved Locums here</Text></View>
         
            
            <ListV/>
            </ScrollView>
            
        </View>
        
    )
}
export default InstSaved







