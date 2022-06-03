import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

import Header from "../components/Header";
import TextInput from "../components/TextInput";
import {

  RegisterScreen,

} from './RegisterScreen';
import { useRoute } from "@react-navigation/native";

export default function OTP({ route,navigation }) {
  // const route=useRoute();

  const { name,contact } = route.params;

  
  return (
    <View>
      <BackButton goBack={navigation.goBack} />

      <View
        style={{
          width: 200,
          height: 200,
          marginLeft: "auto",
          marginTop: 40,
          marginRight: "auto",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 150, height: 150, alignSelf: "center" }}
          source={require("../image/OTPIMAGE.png")}
        />
      </View>

      <View>
        <Header
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 21,
            color: "#DD9C1F",
            fontWeight: "bold",
            paddingVertical: 4,
          }}
        >
          OTP Verification
        </Header>
       <Text
          style={{ color: "#DD9C1F", marginLeft: "auto", marginRight: "auto" , }}
        >
          Hi {JSON.stringify(name)}, enter code sent to {}
           <Text style={{ fontWeight: "bold" , }}>{JSON.stringify(contact)}</Text>
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
          width: 300,
          paddingLeft:35,
          // marginLeft:25,
          alignSelf:'center',
          marginTop:40,
         
        }}
      >
        <TextInput style={{ width: 40, }}></TextInput>
        <TextInput style={{ width: 40, marginLeft:-200}}></TextInput>
        <TextInput style={{ width: 40, marginLeft:-400}} ></TextInput>
        <TextInput style={{ width: 40, marginLeft:-600}} ></TextInput>
      
      
      </View>

      <Button
        style={{
          width: "80%",
          marginVertical: 10,
          marginLeft: "auto",
          marginRight: "auto",

          paddingVertical: 2,
        }}
        mode="filled"
        onPress={() => navigation.navigate("LocumDrawer")}
      >
        VERIFY
      </Button>

      <View style={styles.row}>
        <Text>Didn't get code? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={{ fontWeight: "bold", color: "#DD9C1F" }}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
