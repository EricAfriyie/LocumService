import React from 'react';
import { Text, TouchableOpacity,ScrollView,Image,View,TextInput } from 'react-native';
import BackButton from '../components/BackButton';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Previous from '../screens/PreviousList';
import Matched from '../screens/MostmatchedList';

import { Searchbar } from 'react-native-paper';



function Search({navigation}) {
    return (
      
         <View style={{  
    padding: 10, paddingTop:50, backgroundColor:'white' ,flex:1}}>
     

          <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        
        
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={20}/>
      </TouchableOpacity>
        

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      
         <TouchableOpacity>
           <Ionicons name="notifications-outline" size={20}/>
        </TouchableOpacity>
        </View>

      </View>


      

<MyComponent/>
<ScrollView>





<View><Text style={{paddingTop:20,fontSize:17, fontWeight:'bolder'}}>Previously Viewed offers</Text>

<Previous/>

</View>

<View><Text style={{paddingTop:20, fontSize:17, fontWeight:'bolder'}}>Most Matched Jobs / Offers</Text>

<Matched/>
</View>
</ScrollView>
        </View>
        



    )
}
export default Search




const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
    style= {{backgroundColor:'#F3F3F3', borderRadius:15,marginTop:10, }}
      placeholder='Search jobs here..'
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};



/*<View> </View>
 <Text> Interest: Medical Administrator </Text> */
