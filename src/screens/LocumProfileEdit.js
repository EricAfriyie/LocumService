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

  const [value, onChangeText] = React.useState("PHD in Health Administration and a degree in BSc. PhysicianAssistant. I also graduated with first class honours in PA with the highest CGPA in the College of Applied Sciences at the University of Ghana.");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCAA2D',
      paddingTop: 50,
    },
  });
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FCAA2D', 'white','#FEFEFE']}>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            padding: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="arrow-back" size={20} />
          </TouchableOpacity>

         
        </View>

        <ScrollView vertical showsVerticalScrollIndicator={false}>

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
          <Ionicons name="location-outline" size={20} />Achimota, Christian Village
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
            4.8 Rating
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
          Bio
        </Text>
        
          <TextInput  multiline={true} numberOfLines={10} onChangeText={text => onChangeText(text)} maxLength={300} editable={true} spellCheck={true} value={value} style={{width:width/1.1,textAlignVertical: "top",height:243, alignSelf:'center',backgroundColor:'#f2f2f2', padding:15, borderRadius:10,}}/>
            
           
          

        <Text
          style={{
            fontSize: 20,
            padding: 25,
            paddingBottom: 10,
            paddingTop: 20,
            fontWeight: 'bold',
            color: '#FCAA2D',
            marginBottom: 10,
          }}>
          Profession & Experience
        </Text>
        <TextInput
        value="Medical Health Admin. | 990@gmail.com"
          style={{
            width:width/1.1,textAlignVertical: "top",height:'auto', alignSelf:'center',backgroundColor:'#f2f2f2', padding:15, borderRadius:10,
          }}/>

        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontSize: 20,
              padding: 25,
              paddingBottom: 10,
              paddingTop: 20,
              fontWeight: 'bold',
              color: '#FCAA2D',
              marginBottom: 10,
            }}>
            Telephone no.
          </Text>

          
        </View>
        <View
          style={{
            
            marginBottom: 10,
          }}>
          <TextInput
            style={{
              width:width/1.1,textAlignVertical: "top",height:'auto', alignSelf:'center',backgroundColor:'#f2f2f2', padding:15, borderRadius:10,
            }} value="+233 557 414 535"/>
          
          
        </View>


          <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontSize: 20,
              padding: 25,
              paddingBottom: 10,
              paddingTop: 20,
              fontWeight: 'bold',
              color: '#FCAA2D',
              marginBottom: 10,
            }}>
            Files: IDs and CVs
          </Text>

          
        </View>
        <View
          style={{
            
            marginBottom: 10,
          }}>
          <TextInput
            style={{
              width:width/1.1,textAlignVertical: "top",height:'auto', alignSelf:'center',backgroundColor:'#f2f2f2', padding:15, borderRadius:10,
              
            }} placeholder='Update files ie CVs'/>
          
          
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
          <TouchableOpacity onPress={() => navigation.navigate('LocumSavedChanges')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: '#FCAA2D',
              }}>
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </LinearGradient>
      
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
export default InstProfileView;
