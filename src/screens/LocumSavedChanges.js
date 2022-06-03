import React from 'react'
import { Text, View,Dimensions,TouchableOpacity,ScrollView,Image,  } from 'react-native';

import { Ionicons, FontAwesome, AntDesign,} from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

function LocumSavedChanges({navigation}) {
    return (
        <View  style={{  flex: 1,backgroundColor:'white' , padding: 10, }}>
        
       <View style={{alignSelf:'center', justifyContent:'center',  marginTop:'auto' }}>
          <Image source={require('../image/confirm-icon.png')} style={{width:173, height:175,marginRight:'auto',marginLeft:'auto'}}/>
           <View>
             <Text style={{  fontWeight:'bold' , fontSize:20, textAlign:'center',padding:20,marginTop:31 }}>Profile update successfully effected</Text>
         <Text style={{    fontSize:15,textAlign:'center',height:42,
          }}>Stay on alert to get response from{'\n'}
institutions.</Text></View>
        </View>

        <View style={{  fontWeight:'bold' , borderRadius:15,textAlign:'center',justifyContent:'center',fontSize:20, marginBottom:30, marginTop:'auto' ,backgroundColor:'#FCAA2D',height:55,}}>
        <TouchableOpacity onPress={() => navigation.navigate('LocumDrawer')} >
        <Text style={{ textAlign:'center',fontSize:20 ,backgroundColor:'#FCAA2D',}}>Search for Jobs</Text>
        </TouchableOpacity>

        
        </View>


        <View style={{  fontWeight:'bold' , borderRadius:15,textAlign:'center',justifyContent:'center',fontSize:20, marginBottom:'auto',borderColor:'#FCAA2D',borderWidth:2,height:55,}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ textAlign:'center',fontSize:20 ,}}>Return Home</Text>
        </TouchableOpacity>

        
        </View>

        

       
         
      

        


      
        </View>
        
    )
}
export default LocumSavedChanges;








