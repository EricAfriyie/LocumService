import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import { dummyData } from '../data/data';
import ImagedCarouselCard from 'react-native-imaged-carousel-card';
import Drawerr from '../components/LocumDrawer';
import Recommend from '../screens/RecommendedList';
import JobDetail from './jobDetail';
const { width, height } = Dimensions.get('window');

export default function PermanentJob({ navigation }) {
  return (
    <View
      style={{
        padding: 10,
        paddingTop: 50,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bolder',
                alignSelf: 'center',
              }}>
              Hello Grandison 👋
            </Text>
            <Text>Welcome Back</Text>
          </View>

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: 'bolder', padding: 13 }}>
            How can we help?
          </Text>
        </View>


        <View>
          <Carousel data={dummyData} />
        </View>


        <View>
          <Text style={{ fontSize: 17, fontWeight: 'bolder', padding: 13 }}>
            How can we help?
          </Text>
        </View>









          <View style={{ flexDirection: 'row',justifyContent:'space-evenly'}}>



          <TouchableOpacity
            style={{
              
              padding: 8,
              backgroundColor: '#FCAA2D',
              marginRight: 3,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('FullTime')}>
            <Image
              source={require('../image/build1.png')}
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              Full Time
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              {' '}
              Get fully employed Now
            </Text>
          </TouchableOpacity>




          




          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: 10,
            }}>
            
            <TouchableOpacity
              style={styles.longbox}
              onPress={() => navigation.navigate('LocumOffers')}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../image/Time.png')} style={{}} />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 13,
                    marginLeft: 10,
                  }}>
                  Locum Offers{'\n'}
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'normal',
                      fontSize: 13,
                    }}>
                    Find a shift job
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>





            <TouchableOpacity
              style={{
               

                backgroundColor: '#FCAA2D',
                borderRadius: 10,
                marginBottom: 14,
                padding: 10,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../image/house.png')} style={{}} />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 13,
                    marginLeft: 10,
                  }}>
                  Remote jobs{'\n'}
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'normal',
                      fontSize: 13,
                    }}>
                    Get a job anywhere
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>




          </View>
        </View>











        <Recommend />










         



       
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
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: 170,
  },
  longbox: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#FCAA2D',
    borderRadius: 10,
    marginBottom: 14,
    padding: 10,
  },
});













/*<TouchableOpacity
            style={{
              width: 'auto',
              height: '150',
              padding: 8,
              backgroundColor: '#FCAA2D',
              marginRight: 3,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('FullTime')}>
            <Image
              source={require('../image/build1.png')}
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              Full Time
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              {' '}
              Get fully employed Now
            </Text>
          </TouchableOpacity>*/

















































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


/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bolder',
                alignSelf: 'center',
              }}>
              Hello Grandison 👋
            </Text>
            <Text>Welcome Back</Text>
          </View>

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Carousel data={dummyData} />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: 'bolder', padding: 13 }}>
            How can we help?
          </Text>
        </View>..

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity
            style={{
              width: 'auto',
              height: '150',
              padding: 8,
              backgroundColor: '#FCAA2D',
              marginRight: 3,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('FullTime')}>
            <Image
              source={require('../image/build1.png')}
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              Full Time
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              {' '}
              Get fully employed Now
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={styles.longbox}
              onPress={() => navigation.navigate('LocumOffers')}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../image/Time.png')} style={{}} />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 13,
                    marginLeft: 10,
                  }}>
                  Locum Offers{'\n'}
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'normal',
                      fontSize: 13,
                    }}>
                    Find a shift job
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 'auto',
                height: 'auto',

                backgroundColor: '#FCAA2D',
                borderRadius: 10,
                marginBottom: 14,
                padding: 10,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../image/house.png')} style={{}} />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 13,
                    marginLeft: 10,
                  }}>
                  Remote jobs{'\n'}
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'normal',
                      fontSize: 13,
                    }}>
                    Get a job anywhere
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 17, fontWeight: 'bolder', paddingLeft: 16 }}>
            Recommended for you
          </Text>
          <Recommend />
        </View>*/






        /*
CARD YELLOW

         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>




          <TouchableOpacity
            style={{
              width: 'auto',
              height: '150',
              padding: 8,
              backgroundColor: '#FCAA2D',
              marginRight: 3,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('FullTime')}>
            <Image
              source={require('../image/build1.png')}
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              Full Time
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              {' '}
              Get fully employed Now
            </Text>
          </TouchableOpacity>




          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: 10,
            }}>
            
            <TouchableOpacity
              style={styles.longbox}
              onPress={() => navigation.navigate('LocumOffers')}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../image/Time.png')} style={{}} />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 13,
                    marginLeft: 10,
                  }}>
                  Locum Offers{'\n'}
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'normal',
                      fontSize: 13,
                    }}>
                    Find a shift job
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>





            <TouchableOpacity
              style={{
                width: 'auto',
                height: 'auto',

                backgroundColor: '#FCAA2D',
                borderRadius: 10,
                marginBottom: 14,
                padding: 10,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../image/house.png')} style={{}} />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 13,
                    marginLeft: 10,
                  }}>
                  Remote jobs{'\n'}
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'normal',
                      fontSize: 13,
                    }}>
                    Get a job anywhere
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>




          </View>
        </View> */