import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';

function InstProfileView({ navigation }) {
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCAA2D',
      paddingTop: 50,
    },
  });
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FCAA2D', '#FEFEFE']}>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            padding: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('InstHome')}>
            <Ionicons name="arrow-back" size={20} />
          </TouchableOpacity>

          <Text>
            <Ionicons
              name="star-outline"
              size={18}
              style={{
                alignSelf: 'center',
                color: '#E48700',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
            />
            4.8
          </Text>
        </View>

        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            alignSelf: 'center',
          }}>
          <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/women/40.jpg',
            }}
            size="large"
          />
        </View>

        <Text style={{ alignSelf: 'center', marginTop: 18 }}>
          Eric Petterson{' '}
        </Text>
        <Text style={{ alignSelf: 'center', marginTop: 10 }}>
          Physician Assistant
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
          }}>
          <Text>
            <Ionicons
              name="radio-button-on"
              size={20}
              style={{ color: 'red' }}
            />
            <Text>Booked</Text>
          </Text>
          <Text>
            <Ionicons name="location-outline" size={20} />
            <Text>Achimota Accra</Text>
          </Text>
        </View>

        <Text
          style={{
            fontSize: 20,
            padding: 35,
            paddingBottom: 10,
            paddingTop: 20,
            fontWeight: 'bold',
            color: '#FCAA2D',
            marginBottom: 10,
          }}>
          Bio - About Locum
        </Text>
        <View
          style={{
            width: 300,
            height: 'auto',
            backgroundColor: '#f2f2f2',
            borderRadius: 15,
            padding: 15,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Text>
            PHD in Health Administration and a degree in BSc. Physician
            Assistant. I also graduated with first class honours in PA with the
            highest CGPA in the College of Applied Sciences at the University of
            Ghana. {'\n'}
            <Text
              style={{
                fontSize: 6,
                flexDirection: 'row',
                top: 4,
                height: 9,
                alignSelf: 'flex-end',
                textAlign: 'right',
                paddingTop: 20,
                fontWeight: 'bold',
                color: '#FCAA2D',
                marginRight: 20,
              }}>
              {' '}
              Double click on download icon {'\n'} to access files: CVs,
              certificates{' '}
              <Ionicons
                name="download"
                size={18}
                style={{ color: '#E48700' }}
              />{' '}
            </Text>
          </Text>
        </View>

        <Text
          style={{
            fontSize: 20,
            padding: 35,
            paddingBottom: 10,
            paddingTop: 20,
            fontWeight: 'bold',
            color: '#FCAA2D',
            marginBottom: 10,
          }}>
          Email Address
        </Text>
        <View
          style={{
            width: 300,
            height: 'auto',
            backgroundColor: '#f2f2f2',
            borderRadius: 15,
            padding: 15,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Text> erickojopetterson1990@gmail.com</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontSize: 20,
              padding: 35,
              paddingBottom: 10,
              paddingTop: 20,
              fontWeight: 'bold',
              color: '#FCAA2D',
              marginBottom: 10,
            }}>
            Tel. No
          </Text>

          <Text
            style={{
              fontSize: 20,
              padding: 85,
              paddingBottom: 10,
              paddingTop: 20,
              fontWeight: 'bold',
              color: '#FCAA2D',
              marginBottom: 10,
            }}>
            Experience
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10,
          }}>
          <View
            style={{
              width: 140,
              alignSelf: 'center',
              height: 50,
              backgroundColor: '#f2f2f2',
              padding: 15,
              borderRadius: 10,
              marginBottom: 20,
              marginLeft: 10,
            }}>
            <Text>+233 244 6161 680</Text>
          </View>
          <View
            style={{
              width: 135,
              alignSelf: 'center',
              height: 50,
              backgroundColor: '#f2f2f2',
              padding: 15,
              borderRadius: 10,
              marginBottom: 20,
            }}>
            <Text>2 Yrs, 10m</Text>
          </View>
        </View>

        <View
          style={{
            fontWeight: 'bold',
            borderRadius: 15,
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 20,
            marginBottom: 47,
            marginTop: 'auto',
            backgroundColor: '#FCAA2D',
            height: 55,
            width: width / 1.1,
            padding: 10,
            marginLeft: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Conclude')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: '#FCAA2D',
              }}>
              Send Request
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
export default InstProfileView;
