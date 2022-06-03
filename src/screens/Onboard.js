import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Image, Dimensions, Text, View,TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import Button from '../components/Button';








// import AppLoading from "expo-app-loading";
// import {
//   useFonts,
//   Montserrat_400Regular,
//   Montserrat_500Medium,
//   montserrat_600SemiBold,
//   Montserrat_700Bold,
// } from "@expo-google-fonts/montserrat";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 90,
    // marginHorizontal: 40,
    marginLeft:'auto',
    marginRight:'auto',
    //  marginTop:10
  },
  img: {
    alignSelf: "center",
    borderRadius:10,
    
    height: h * 0.3,
    width: w * 0.6,
  },
  title: {
    color:'#705D27',
    marginTop: 60,
    marginHorizontal: 45,
    fontSize: 28,
  },
  glass:{
    // height:316,
    // width:280,


    height: h * 0.45,
    width: w * 0.8,
    
    backgroundColor:'#FFFFFF4D', 
    borderRadius:13,
    alignSelf: "center",
    position:'absolute', 
    top:270 ,
    blurRadius:10,
  },
  text: {
    color: "#CBA227",
    padding:20,
 
    fontSize: 18,
    lineHeight: 25,
    
    alignSelf:'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DD9C1F', 
  }
});


export default function Onboard({navigation}){

  return(

    <View style={styles.container}>

    <LinearGradient
    colors={['#FFEED0', '#DD9C1F', ]}
    
    >
    
    
    
    
    <Swiper
    buttonWrapperStyle={{
     backgroundColor: "transparent",
     flexDirection: "row",
     position: "absolute",
     bottom: 0,
     left: 0,
     top:30,
     
     
     paddingHorizontal: 0,
     
     
     alignItems: "center",
    }}
    style={styles.wrapper}
    showsButtons={true}
    paginationStyle={{
     marginRight: w * 0.01,
     marginBottom: h * 0.07,
    }}
    
    
    activeDotColor="#ffffff"
    dotStyle={{width:13,}}
    
    dotColor="#e6e6e6"
    activeDotStyle={{width:60}}
    nextButton={
     <View
       style={{
         height: 60,
         borderRadius: 30,
         alignItems: "center",
         justifyContent: "center",
         width: 60,
         backgroundColor: "#ffffff",
         marginHorizontal: 12,
       }}
     >
       <AntDesign name="arrowright" size={22} color="#DD9C1F" />
     </View>
    }
    prevButton={
     <View
       style={{
         height: 60,
         borderRadius: 30,
         alignItems: "center",
         justifyContent: "center",
         width: 60,
         backgroundColor: "#ffffff",
         marginHorizontal: 12,
       }}
     >
       <AntDesign name="arrowleft" size={22} color="#DD9C1F" />
     </View>
    }
    >
    <View style={styles.slide}>
     <Image source={require("../image/img1.png")} style={styles.img} />
     
     <View style={styles.glass}   >
     
       <Text style={styles.title}>Find all Locum Jobs in one App</Text>
       <Text style={styles.text}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       </Text>
    
     </View>
    
     
    
     
    </View>
    <View style={styles.slide}>
     <Image source={require("../image/img2.png")} style={styles.img} />
     <View style={styles.glass}>
       <Text style={styles.title}>Find Locums to occupy job Spaces</Text>
       <Text style={styles.text}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       </Text>
    </View>
    </View>
    
    <View style={styles.slide}>
     <Image source={require("../image/img3.png")} style={styles.img} />
     <View style={styles.glass}>
       <Text style={styles.title}> Your one stop app.</Text>
       <Text style={styles.text}>
       Lorem ipsum dolor sit amet, consectetur. 
       </Text>
       
     </View>
     
     
    
   
   

     <TouchableOpacity style={{ height:40,padding:5,paddingLeft:15,paddingRight:10, backgroundColor:"#DD9C1F", alignSelf:'center',borderRadius:10,justifyContent:"center",marginTop: h * 0.37, marginLeft:'auto', marginRight:'auto'}}
        onPress={() => navigation.navigate('InstLocum')}
      >
        <Text style={{
              
              color: 'white',
              fontWeight: 'bold',
              fontSize:13,
             
            
              textAlign: 'center',
            }}>Get Started</Text>
      </TouchableOpacity>


</View>
    
    
    </Swiper>
    </LinearGradient>
    
    
    </View>
    
  )



}
  