





import React from 'react'
import { Text, View,TextInput,TouchableOpacity,ScrollView,StyleSheet,Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';



function InstProfile({navigation}) {
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
        
        
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={20}/>
      </TouchableOpacity>

      <Text  style={{
         marginLeft:'auto',
        marginRight:'auto',

         textAlign:'center',
         fontSize:20,fontWeight:'bold',marginBottom:10


          
        }}>Profile & Settings</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('InstProfileEdit')}>

          <View  style={{flexDirection:'row',}}>
          <View style={{width:80,height:80, borderRadius:50,alignSelf:'center',}}><Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/women/40.jpg',
            }}
            size="large"
          /> 
          </View>

          <Text><Text style={{alignSelf:'center', color:'#FCAA2D',  marginTop:18, padding:10,fontSize:20, fontWeight:"bold" , }}>Ridge Hospital</Text>{'\n'}<Ionicons name="location-outline" size={18} style={{alignSelf:'center',marginTop:'auto',marginBottom:'auto'}}/>
 Castle Road, Accra</Text>
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



<View style={{marginTop:200,alignSelf:'center'}}>
  <Text style={{alignSelf:'center',opacity: 0.3 }}>Joined LocumX since 2019</Text>
  <Text style={{textAlign:'auto',color:'#FAD3AA',}}>2022 LocumX Inc, All rights reserved</Text>
 </View>



        </View>

    );
}
export default InstProfile












