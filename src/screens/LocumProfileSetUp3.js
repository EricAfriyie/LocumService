import * as React from 'react';
import { Text, View,TouchableOpacity,Dimensions, TextInput,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Button from "../components/Button";


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { width, height } = Dimensions.get('window')



export default function LocumProfileSetUp3({navigation}) {
  return (
    <View style={{ flex: 1,  paddingTop:80,padding: 15,backgroundColor: 'white'  }}>

    <View>
     <Text style={{fontSize:30, paddingTop:10,fontWeight:'bold',marginBottom:20  }}>Set up 
your Profile </Text>


    </View>
<TouchableOpacity>
       <View>
        <Image  style={{height:200,width:200,marginLeft:'auto', marginRight:'auto', paddingTop:10,marginBottom:20  }}source={require('../image/profile.png')}/>
      </View>
</TouchableOpacity>


<Text style={{textAlign:'center',marginBottom:100 }}>Tap on the icon to upload a {'\n'}
profile picture</Text>


 


   <Button
        style={{
          width: "80%",
          marginVertical: 10,
          marginLeft: "auto",
          marginRight: "auto",
          paddingVertical: 2,
        }}
        mode="filled"
        onPress={() => navigation.navigate("LocumDrawer")}
      >
        Save & Proceed
      </Button>

        
      
    </View>
  );
}






