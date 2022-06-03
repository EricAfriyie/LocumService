import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,Dimensions,ScrollView} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import { dummyData } from '../data/data';
import ImagedCarouselCard from 'react-native-imaged-carousel-card';
import Drawerr from '../components/LocumDrawer';
import ActiveJobs from '../screens/ActiveJobs'
import JobDetail from './jobDetail';
import JobUpload from './JobUpload';


import axios from 'axios';
const { width, height } = Dimensions.get('window')




export default function InstHome({navigation}) {
const axios = require('axios')


  




  
  return (
    <View style={{  
    padding: 10, paddingTop:50, flex:1,backgroundColor:'white'}}>
     

          <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        

        <View>
          <Text style={{fontSize:18, fontWeight:'bolder', alignSelf:'center'}}>
            Hello Kidaamax 👋
           
          </Text>
           <Text>Welcome Back</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                   <Text>{'\n'}Tue, 22 May</Text>

        <TouchableOpacity>
           <Ionicons name="notifications-outline" size={20}/>
        </TouchableOpacity>
         

        </View>
       
      </View>

      <View style={{paddingTop:10,paddingHorizontal:10}} >
          <Image source={require('../image/carousel-LX1.png')}/>
      </View>

      
      <View style={{ marginTop:25,}}>
        <Text style={{fontSize:17, fontWeight:'bold', paddingTop:15, color:'#FCAA2D'}}>
            Add jobs
           
          </Text>

         

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginBottom:15 }} >
       <Text>Click on the  “+” to add locum offers, permanent jobs, part-time </Text>
       <TouchableOpacity onPress={() => navigation.navigate('JobUpload')}><Image   style={{ width:40,height:40 }} source={require('../image/add-job-btn.png')}/></TouchableOpacity>
      </View>


  <View style={{flexDirection:'row',justifyContent:'space-between', padding:10}}>
         
           <Text style={{fontSize:17, fontWeight:'bolder'}}> 
           
            Active locum or job offers
           
          </Text><Ionicons name="arrow-forward" size={20}/>
</View>
          <ScrollView  showsVerticalScrollIndicator={false}>

<View>
       
           <ActiveJobs/>
      </View>
     
      </ScrollView>


     
 
   
      
    </View>
  );
}


const styles = StyleSheet.create({
    cardView: {
      
        
       
        
      marginTop: 15,
       
       
    },
    image: {
        
        borderRadius: 10,
        marginLeft:'auto',
        marginRight:'auto',
        width: '100%', 
        height:170,
        
        
        
      
      
    },
    longbox: {
        
         width:'auto',
         height:'auto',
         backgroundColor:'#FCAA2D' ,
          borderRadius:10,
          marginBottom:14,
          padding:10,
          
          
      
         
        
      
      
    },
    })

          /*<AntDesign name="search1" size={20} color="black" />*/




 

//   <View>
//   <Text style={{paddingTop:20, fontWeight:'bolder', fontSize:22}}>Recommended for you</Text>
//     <List/>
//   </View>

 



/* <View style={styles.cardView}>
          <TouchableOpacity>
            <Image source={require('../image/carousel-LX.png')} style={styles.image}/>
            </TouchableOpacity>
        </View>*/

