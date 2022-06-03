import React from 'react'
import { Text, View,Dimensions,TouchableOpacity,ScrollView } from 'react-native';

import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

function JobDetail({navigation}) {
    return (
        <View  style={{  paddingTop:50,flex: 1,backgroundColor:'#FCAA2D'  }}>
         <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',padding:10
        }}>
        
         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={24} color='white'/>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,padding:10}}>
        <TouchableOpacity>
           <Ionicons name="notifications-outline" color='white' size={24}/>
        </TouchableOpacity>
        </View>

       
      </View>
       <ScrollView >
       <View style={{paddingTop: 20}}><Text style={{fontSize:22,color:'white', fontWeight:'bolder',padding:10}}>Find all your saved jobs here</Text></View>
              <View style={{height:height/4, borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:'#FCAA2D'}}></View>

       <View style={{height:height/1, borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:'white'}}></View>
         
            
            
            </ScrollView>
            
        </View>
        
    )
}
export default JobDetail







