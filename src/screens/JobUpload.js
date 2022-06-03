import * as React from 'react';
import { Text, View,TouchableOpacity,Dimensions, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { width, height } = Dimensions.get('window')


function HomeScreen({ navigation }) {
  //  React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', (e) => {
  //     // Prevent default behavior
  //     e.preventDefault();

  //     alert('Default behavior prevented');
  //     // Do something manually
  //     // ...
  //   });

  //   return unsubscribe;
  // }, [navigation]);

   const [value, onChangeText] = React.useState('Describe the locum job offer in a few words');
   
  return (
    <View style={{ flex: 1,  padding:10,  backgroundColor: 'white' }}>
        <Text style={{fontSize:20, paddingBottom:20,paddingTop:20,fontWeight:'bold', color:'#FCAA2D'  }}>Job Title</Text>
        <TextInput placeholder='Input Job title here' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:10 }}/>
        <Text style={{ fontSize:20,paddingBottom:20,paddingTop:20,fontWeight:'bold', color:'#FCAA2D'  }}>Describe Job</Text>

        <TextInput multiline={true} numberOfLines={7} onChangeText={text => onChangeText(text)} maxLength={100} editable={true} spellCheck={true} value={value} style={{width:width/1.1,textAlignVertical: "top",height:253, alignSelf:'center',backgroundColor:'#f2f2f2', padding:15, borderRadius:10, }}/>

    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{ flex: 1,  padding: 10,backgroundColor: 'white'  }}>

        <Text style={{fontSize:20, paddingBottom:20,paddingTop:20,fontWeight:'bold', color:'#FCAA2D',marginBottom:38  }}>Key Requirements</Text>
        <TextInput placeholder='input requirement here ' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:38 }}/>

        <TextInput placeholder='input requirement here ' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:38 }}/>

        <TextInput placeholder='input requirement here ' style={{width:width/1.1,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:15 }}/>

  <TouchableOpacity style={{alignItems:'center'  }} >
<Text style={{color:'#FCAA2D',  }}> + Tap to add requirement </Text>
  </TouchableOpacity>

        
      
    </View>
  );
}


function Complete({navigation}) {
  return (
  <View style={{ flex: 1, justifyContent: 'center', padding: 10, backgroundColor: 'white'  }}>
     
       
    <Text style={{fontSize:20,paddingTop:15,fontWeight:'bold', color:'#FCAA2D',marginBottom:38  }}>Other details</Text>

    <View style={{flexDirection:'row', justifyContent:'space-between',}}>
      <View style={{width:40, height:40, borderRadius:50, backgroundColor:'#FCAA2D',alignSelf:'center',}}>
      <Ionicons name="cash-outline" size={24} style={{alignSelf:'center',marginTop:'auto',marginBottom:'auto'}}/>
      </View>


      <TextInput placeholder='input requirement here ' style={{width:width/1.2,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:20,marginTop:8,marginLeft:10 }}/>
    </View>






  <View style={{flexDirection:'row', justifyContent:'space-around' }}>

    <View style={{width:40, height:40, borderRadius:50, backgroundColor:'#FCAA2D',alignSelf:'center',}}>
      <Ionicons name="alarm-outline" size={24} style={{alignSelf:'center',marginTop:'auto',marginBottom:'auto'}}/>
    </View>

      <TextInput placeholder='input  ' style={{width:width/2.5,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:20,marginLeft:10 }}/>


      <TextInput placeholder='input ' style={{width:width/2.5,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:20 }}/>
  </View>



              



    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{width:40, height:40, borderRadius:50, backgroundColor:'#FCAA2D',alignSelf:'center',}}>  
              <Ionicons name="location-outline" size={24} style={{alignSelf:'center',marginTop:'auto',marginBottom:'auto'}}/>
            </View>

              <TextInput placeholder='input requirement here ' style={{width:width/1.2,alignSelf:'center',height:50,backgroundColor:'#f2f2f2',padding:15,borderRadius:10,marginBottom:20 ,marginLeft:10}}/>
    </View>



      <View style={{  fontWeight:'bold' , borderRadius:15,textAlign:'center',justifyContent:'center',fontSize:20, marginBottom:30, marginTop:'auto' ,backgroundColor:'#FCAA2D',height:55,width:width/1.1,padding: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Conclude')}>
        <Text style={{ textAlign:'center',fontSize:20 ,backgroundColor:'#FCAA2D',}}>Save</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
}

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

const Tab = createMaterialTopTabNavigator();

export default function JobUpload() {
  return (
    
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor:'#C6C6C6',
          tabBarActiveTintColor:'Black',
          tabBarLabelStyle: { fontSize: 10},
          tabBarItemStyle: { width: 118},
          tabBarStyle: { paddingTop:30, },
          tabBarIndicatorStyle:{backgroundColor:'#FCAA2D',height:7},
          
          lazy:true,
        }}
      >
        <Tab.Screen name="Description" component={HomeScreen} />
        <Tab.Screen name="Requirements" component={SettingsScreen} />
        <Tab.Screen name="Other Details" component={Complete} />

      </Tab.Navigator>

   
  );
}
