import React,{useState,useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';


// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Medical Records Admin.',
//     company:'Sakumono comm. clinic',
//     location:'Sak. Estates',
//     salary:'50',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'I.T Technician',
//     company:'Sakumono comm. clinic',
//     location:'Sak. Estates',
//     salary:'50',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Pediatrician.',
//     company:'Sakumono comm. clinic',
//     location:'Sak. Estates',
//     salary:'50',
//   },

//    {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Medical Records Admin.',
//     company:'Sakumono comm. clinic',
//     location:'Sak. Estates',
//     salary:'50',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'I.T Technician',
//     company:'Sakumono comm. clinic',
//     location:'Sak. Estates',
//     salary:'50',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Pediatrician.',
//     company:'Sakumono comm. clinic',
//     location:'Sak. Estates',
//     salary:'50',
//   },
//     {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Medical Records Admin.',
//     company:'Sakumono comm. clinic',
//     location:'Sak. Estates',
//     salary:'50',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'I.T Technician',
//     company:'Sakumono comm. clinic',
//     location:'Sak. Estates',
//     salary:'50',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Pediatrician.',
//     company:'Sakumono comm. clinic',
//     location:'Sak. Estates',
//     salary:'50',
//   },
// ];






// export default App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   console.log(data);

//   useEffect(() => {
//     fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

  // return (

  //   <View style={{ flex: 1, padding: 24 }}>
  //     {isLoading ? <Text>Loading...</Text> : 
  //     ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
  //         <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
  //         <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
  //         <FlatList
  //           data={data.articles}
           
  //           renderItem={({ item }) => (
  //             <Text>{item.title}</Text>
  //           )}
  //         />
  //       </View>
  //     )}
  //   </View>
  // );
// };

const Item = ({ title ,name_organization,location,min_salary,max_salary,job_type }) => (
  <TouchableOpacity onPress>
  <View>
  
  <View style={styles.item}>
  <View style={{width:63,height:63, borderRadius:50,alignSelf:'center',  marginRight:10 }}><Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/women/40.jpg',
            }}
            size="large"
          /> 
          
          
          
          </View>
  <View style={{padding:10}}>
    <Text style={styles.title}>{title}</Text>
    <Text>{name_organization}</Text>
    <Text style={{padding:10}}>{job_type}</Text>

   <TouchableOpacity><Text><Ionicons name="location-outline" size={15}/> {location} | <Text style={{color:'#E48700',}}> ₵{min_salary} - ₵{max_salary} </Text><Text>|</Text>
    <Ionicons name="bookmark" size={15}/></Text></TouchableOpacity>
              

    

  </View></View></View>
  </TouchableOpacity>
);

const Recommend= () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://loccumx.herokuapp.com/api/v1/job/?format=json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  const renderItem = ({ item }) => (
    
    <Item title={item.title} name_organization={item.name_organization} location={item.location} min_salary={item.min_salary} max_salary={item.max_salary}
    job_type={item.job_type}/>   
   
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      
        horizontal
        showshorizontalScrollIndicator={false}
        fadingEdgeLength={2}
        data={data}
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
    padding: 13, 
    marginBottom:10,
    marginVertical: 2,
    marginHorizontal: 10,
    borderRadius:10,
    borderBottomwidth:3,
     shadowColor: '#000',
      shadowOpacity: 0.19,
      shadowRadius: 3,
      elevation: 4,
   flexDirection:'row',justifyContent:'center',
    
  
    

  },
  title: {
    fontSize: 20,
    color:'#E48700'
  },
});

export default Recommend;