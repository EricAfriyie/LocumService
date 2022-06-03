import * as React from 'react';
import { Text, View,TouchableOpacity,Dimensions, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Button from "../components/Button";


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { width, height } = Dimensions.get('window')



export default function LocumProfileSetUp1({navigation}) {
  return (
    <View style={{ flex: 1,  paddingTop:40,padding: 15,backgroundColor: 'white'  }}>

    <View>
     <Text style={{fontSize:30, paddingTop:10,fontWeight:'bold',marginBottom:15  }}>Set up 
your Profile </Text>
    </View>

        <Text style={{fontSize:20, paddingTop:10,fontWeight:'bold', color:'#FCAA2D',marginBottom:10  }}>User Name</Text>
        <TextInput placeholder='input requirement here ' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:15 }}/>

        <Text style={{fontSize:20,fontWeight:'bold', color:'#FCAA2D',marginBottom:10  }}>Location</Text>

        <TextInput placeholder='input requirement here ' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:15 }}/>

        <Text style={{fontSize:20,fontWeight:'bold', color:'#FCAA2D',marginBottom:10  }}>Telephone No.</Text>

        <TextInput placeholder='input requirement here ' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:15 }}/>


         <Text style={{fontSize:20, fontWeight:'bold', color:'#FCAA2D',marginBottom:10  }}>Profession</Text>

        <TextInput placeholder='input requirement here ' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:15 }}/>




 <Text style={{fontSize:20, fontWeight:'bold', color:'#FCAA2D',marginBottom:10  }}>Working Experience</Text>

        <TextInput placeholder='input requirement here ' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:15 }}/>


   <Button
        style={{
          width: "80%",
          marginVertical: 10,
          marginLeft: "auto",
          marginRight: "auto",

          paddingVertical: 2,
        }}
        mode="filled"
        onPress={() => navigation.navigate("LocumProfileSetUp2")}
      >
        Proceed
      </Button>

        
      
    </View>
  );
}






