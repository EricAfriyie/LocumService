import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Medical Records Admin.',
    company:'Sakumono comm. clinic',
    location:'Sak. Estates',
    salary:'50',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'I.T Technician',
    company:'Sakumono comm. clinic',
    location:'Sak. Estates',
    salary:'50',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pediatrician.',
    company:'Sakumono comm. clinic',
    location:'Sak. Estates',
    salary:'50',
  },
];

const Item = ({ title,company,location,salary }) => (
  <TouchableOpacity>
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{company}</Text>

   <TouchableOpacity><Text><Ionicons name="location-outline" size={15}/> {location} | <Text style={{color:'#E48700',}}> ₵{salary}/Shift </Text><Text>|</Text>
    <Ionicons name="bookmark-outline" size={15}/> <Text>Save</Text></Text></TouchableOpacity>
              

    

  </View>
  </TouchableOpacity>
);

const List = () => {
  
  const renderItem = ({ item }) => (
    
    <Item title={item.title} company={item.company} location={item.location} salary={item.salary}/>
   
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal
        fadingEdgeLength={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 10, 
    marginVertical: 1,
    marginHorizontal: 10,
    borderRadius:10,
    borderBottomwidth:3,
    borderColor:'2B2B2B',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    
    
    shadowRadius: 4,
    elevation: 13,
   
    
    
  
    

  },
  title: {
    fontSize: 18,
    color:'#E48700'
  },
});

export default List;