
import React from 'react'
import { Text, View,TextInput,TouchableOpacity,ScrollView,StyleSheet,Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';



function Profile({navigation}) {
const { width, height } = Dimensions.get('window')


const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: 'white', 
  paddingTop:80,
  padding:15,
  }
});
    return (
        <View style={styles.container}>


        
    



    
         <View
        style={{
          flexDirection:'row',
         
          justifyContent:"flex-start",
            padding:15



          
        }}>
        
        
    <TouchableOpacity onPress={() => navigation.navigate('InstHome')}>
        <Ionicons name="arrow-back" size={20}/>
      </TouchableOpacity>

      <Text  style={{
         marginLeft:'auto',
        marginRight:'auto',

         textAlign:'center',
         fontSize:20,fontWeight:'bold',marginBottom:10


          
        }}>Profile & Settings</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('LocumProfileEdit')}>
          <View  style={{flexDirection:'row',}}>
          <View style={{width:80,height:80, borderRadius:50,alignSelf:'center',}}><Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/women/40.jpg',
            }}
            size="large"
          /> 
          </View>

          <Text><Text style={{alignSelf:'center', color:'#FCAA2D',paddingLeft:10, marginTop:18, padding:10,fontSize:20, fontWeight:"bold" , }}>Katherine Jones</Text>{'\n'}<Ionicons name="star-outline" size={18} style={{alignSelf:'center', color:'#E48700',    marginTop:'auto',marginBottom:'auto'}}/>
 4.8 Rating</Text>


  <Text>{'\n'} <Ionicons name="radio-button-on" size={18} style={{alignSelf:'center', color:'red',    marginTop:'auto',marginBottom:'auto'}}/>
 Booked</Text>
         </View></TouchableOpacity>

<TouchableOpacity>
         <View style={{flexDirection:'row', paddingTop:40 }}>
         <Ionicons name="notifications-outline" size={24} style={{alignSelf:'center',marginTop:'auto',marginBottom:'auto'}}/>
         <Text style={{ marginLeft:20, fontSize:24}}>Notifications </Text>
         </View>
</TouchableOpacity>



<TouchableOpacity>
         <View style={{flexDirection:'row', paddingTop:40 }}>
         <Ionicons name="information-circle-outline" size={24} style={{alignSelf:'center',marginTop:'auto',marginBottom:'auto'}}/>
         <Text style={{ marginLeft:20, fontSize:24}}>Privacy & Security  </Text>
         </View>
</TouchableOpacity>




<TouchableOpacity>
         <View style={{flexDirection:'row', paddingTop:40 }}>
         <Ionicons name="shield-checkmark-outline" size={24} style={{alignSelf:'center',marginTop:'auto',marginBottom:'auto'}}/>
         <Text style={{ marginLeft:20, fontSize:24}}>Help </Text>
         </View>
</TouchableOpacity>






<TouchableOpacity>
         <View style={{flexDirection:'row', paddingTop:40 }}>
         <Ionicons name="person-outline" size={24} style={{alignSelf:'center',marginTop:'auto',marginBottom:'auto'}}/>
         <Text style={{ marginLeft:20, fontSize:24}}>Account </Text>
         </View>
</TouchableOpacity>





<TouchableOpacity>
         <View style={{flexDirection:'row', paddingTop:40 }}>
         <Ionicons name="share-outline" size={24} style={{alignSelf:'center',marginTop:'auto',marginBottom:'auto'}}/>
         <Text style={{ marginLeft:20, fontSize:24}}>Invite a Professional </Text>
         </View>
</TouchableOpacity>



<View style={{marginTop:150,alignSelf:'center'}}>
  <Text style={{alignSelf:'center',opacity: 0.3 }}>Joined LocumX since 2019</Text>
  <Text style={{textAlign:'auto',color:'#FAD3AA',}}>2022 LocumX Inc, All rights reserved</Text>
 </View>



        </View>

    );
}
export default Profile







