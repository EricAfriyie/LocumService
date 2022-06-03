
import React from 'react'
import { Text, View,TextInput,TouchableOpacity,ScrollView,StyleSheet,Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';



function InstProfileEdit({navigation}) {
const { width, height } = Dimensions.get('window')


const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#FCAA2D', 
  paddingTop:80,
  }
});
    return (
        <View style={styles.container}>


        
    <LinearGradient
    colors={['#FCAA2D', '#FEFEFE', ]}
    
    >



    
         <View
        style={{
          flexDirection:'row',
         
          justifyContent:"flex-start",
            padding:15



          
        }}>
        
        
    <TouchableOpacity onPress={() => navigation.navigate('InstitutionDrawer')}>
        <Ionicons name="arrow-back" size={20}/>
      </TouchableOpacity>

      <Text  style={{
         marginLeft:'auto',
        marginRight:'auto',

         textAlign:'center',
         fontSize:20,fontWeight:'bold',marginBottom:10


          
        }}>Edit Profile</Text>
        



      </View>
   
    
      <View style={{width:80,height:80, borderRadius:50,alignSelf:'center',}}><Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/women/40.jpg',
            }}
            size="large"
          /> 

          
          
          
          
          </View>

          <Text  style={{alignSelf:'center',  marginTop:18 }}>Ridge Hospital</Text>
          <Text  style={{alignSelf:'center',  marginTop:18 }}>Castle Road, Accra</Text>


          
        <Text style={{fontSize:20,padding:15, paddingBottom:10,paddingTop:20,fontWeight:'bold', color:'#FCAA2D',marginBottom:10  }}>Email</Text>

        <TextInput placeholder='ridgehospital@gmail.com ' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:20 }}/>

                <Text style={{fontSize:20,padding:15, paddingBottom:10,paddingTop:20,fontWeight:'bold', color:'#FCAA2D',marginBottom:10  }}>Telephone no.</Text>

        <TextInput placeholder='+233 553 234 459 ' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:20 }}/>

        <Text style={{fontSize:20,padding:15, paddingBottom:10,paddingTop:20,fontWeight:'bold', color:'#FCAA2D',marginBottom:10  }}>Job History</Text>
        <TextInput placeholder='Booked locum services: 36' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:70 }}/>


        
      <View style={{  fontWeight:'bold' , borderRadius:15,textAlign:'center',justifyContent:'center',fontSize:20, marginBottom:70, marginTop:'auto' ,backgroundColor:'#FCAA2D',height:55,width:width/1.1,padding: 10,marginLeft:15}}>
        <TouchableOpacity onPress={() => navigation.navigate('SavedChanges')}>
        <Text style={{ textAlign:'center',fontSize:20 ,backgroundColor:'#FCAA2D',}}>Save changes</Text>
        </TouchableOpacity>
      </View>






        </LinearGradient>

        
            
       
            
        </View>
        
    )
}
export default InstProfileEdit



