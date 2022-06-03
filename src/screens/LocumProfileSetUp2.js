import * as React from 'react';
import { Text, View,TouchableOpacity,Dimensions, TextInput, Alert,Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Button from "../components/Button";
import * as DocumentPicker from 'expo-document-picker';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { width, height } = Dimensions.get('window')



export default function LocumProfileSetUp2({navigation}) {

 const Id=async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
		  alert(result.uri);
      console.log(result);


     
	}


  const cert=async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
		  alert(result.uri);
      console.log(result);


     
	}
 
  return (
    <View style={{ flex: 1,  paddingTop:40,padding: 15,backgroundColor: 'white'  }}>

    <View>
     <Text style={{fontSize:30, paddingTop:10,fontWeight:'bold',marginBottom:15  }}>Set up 
your Profile </Text>
    </View>

        <Text style={{fontSize:20, paddingTop:10,fontWeight:'bold', color:'#FCAA2D',marginBottom:10  }}>Bio</Text>
        <TextInput placeholder='write about yourself and  your experience  ' style={{width:width/1.1,alignSelf:'center',textAlignVertical: "top",height:100,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:15 }}/>

        <Text style={{fontSize:20,fontWeight:'bold', color:'#FCAA2D',marginBottom:20  }}>Id Card</Text>

        <TouchableOpacity onPress={Id}>
        <View style={{width:width/1.1,alignSelf:'center',height:140,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:15 }}>
          <Ionicons name="camera-outline"  size={50} style={{alignSelf:'center',backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:15 }} />
          <Text > Take or Upload picture of professional  ID Card </Text> 
        </View>
        </TouchableOpacity>

        <Text style={{fontSize:20,fontWeight:'bold', color:'#FCAA2D',marginBottom:20  }}>Upload Resume & Certificate</Text>

<TouchableOpacity onPress={cert}>
        <View style={{width:width/1.1,alignSelf:'center',height:80,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:15,flexDirection:'row' }}>
          <Ionicons name="cloud-upload-outline"  size={20} style={{alignSelf:'center',marginLeft:'auto', marginRight:'auto'}} />
          <Text style={{alignSelf:'center',marginLeft:'auto', marginRight:'auto'}}> Tap to upload docx or pdf format</Text> 
        </View>
        </TouchableOpacity>



   <Button
        style={{
          width: "80%",
          marginVertical: 10,
          marginLeft: "auto",
          marginRight: "auto",

          paddingVertical: 2,
        }}
        mode="filled"
        onPress={() => navigation.navigate("LocumProfileSetUp3")}
      >
        Proceed
      </Button>

        
      
    </View>
  );
}






