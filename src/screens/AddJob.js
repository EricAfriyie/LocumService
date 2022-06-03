import React from 'react'
import { Text, View,Dimensions,TouchableOpacity,ScrollView } from 'react-native';

import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

function AddJob({navigation}) {
    return (
        <View  style={{  paddingTop:50, padding: 10, pflex: 1,backgroundColor:'white'  }}>
         <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        
         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={20} />
        </TouchableOpacity>

        

       
      </View>
      
       <Text style={{  fontWeight:'bold' , fontSize:20 }}>Add</Text>
        <Text style={{    fontSize:20 }}>Locum Job</Text>


      
        </View>
        
    )
}
export default AddJob







