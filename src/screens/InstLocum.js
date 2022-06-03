import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,Dimensions,ScrollView,ActivityIndicator} from 'react-native';
import Header from '../components/Header'
import Background from '../components/Background'
import BackButton from '../components/BackButton'





export default function InstLocum({ navigation }) {


 const [show,setShow]=useState(false)

  const ClickLocum =()=>{
  setShow(true)
  setTimeout(()=>{
    setShow(false)
    navigation.navigate('RegisterScreen')
  },3000)
}


 const ClickInst =()=>{
  setShow(true)
  setTimeout(()=>{
    setShow(false)
    navigation.navigate('InstitutionRegisterScreen')
  },3000)
}




  

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      <Header>Select Account type</Header>
      <View style={{flexDirection:'row', justifyContent:'space-around', padding:15,alignSelf:'center'}}>
        <TouchableOpacity onPress={()=>ClickLocum()} style={{marginRight:18}}><Image source={require('../image/LOCUMICON.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>ClickInst()} style={{marginLeft:18}}><Image source={require('../image/HOSPITALICON.png')}/></TouchableOpacity>


       </View>
       <ActivityIndicator size='large' color='red' animating={show}/>
    </Background>
  )
}

