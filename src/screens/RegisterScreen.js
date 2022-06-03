import React, { useContext,useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { useRoute } from "@react-navigation/native";

import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator1 } from '../helpers/passwordValidator1'
import { passwordValidator2 } from '../helpers/passwordValidator2'
import { nameValidator } from '../helpers/nameValidator'
import { contactValidator } from '../helpers/contactValidator'
import { usernameValidator } from '../helpers/usernameValidator'



export default function RegisterScreen({ navigation }) {



  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password1, setPassword1] = useState({ value: '', error: '' })
  const [password2, setPassword2] = useState({ value: '', error: '' })
  const [phone_number, setPhone_number] = useState({ value: '', error: '' })
  const [username, setUsername] = useState({ value: '', error: '' })






    // e.preventDefault();

    const data = {  username:username,
          email: email,
          password1: password1,
          password2: password2,
          name: name,
          phone_number:phone_number, };




    
    
  


  




  const onSignUpPressed = () => {


    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError1 = passwordValidator1(password1.value)
    const passwordError2 = passwordValidator2(password2.value)
    const phone_numberError = contactValidator(phone_number.value)
    const usernameError = usernameValidator(username.value)



    if (emailError || passwordError1 ||passwordError2||nameError||phone_numberError||usernameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword1({ ...password1, error: passwordError1 })
      setPassword2({ ...password2, error: passwordError2 })
      setPhone_number({ ...phone_number, error: phone_numberError })
      return
    }


    if (!emailError || !passwordError1 || !nameError||!phone_numberError||!usernameError){
       navigation.navigate ("OTP",{
      contact:phone_number.value,
      name:name.value,

    })

    

    }




    // else{
    //   auth
    //   .createUserWithEmailAndPassword(name,email,password,contact)
    //   .then(userCredentials=>{
    //     const user = userCredentials.user;
    //     console.log(user.email);

    //   })

    //   .catch(error=>alert(error.message))

    // }




    // ...




  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      <Header>Create Account</Header>
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
        autoCompleteType="username"
        textContentType="username"
        keyboardType="username"

      />




      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"

      />




  <TextInput
        label="Password"
        returnKeyType="done"
        value={password1.value}
        onChangeText={(text) => setPassword1({ value: text, error: '' })}
        error={!!password1.error}
        errorText={password1.error}
        secureTextEntry
      />



      <TextInput
        label="Repeat Password"
        returnKeyType="done"
        value={password2.value}
        onChangeText={(text) => setPassword2({ value: text, error: '' })}
        error={!!password2.error}
        errorText={password2.error}
        secureTextEntry
      />







<View style={{flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',marginLeft:-150, width:150,}}>
<View style={{paddingRight:10,width:150}}>
<TextInput

        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}

      />
</View>

<View style={{width:150}}>
<TextInput
        label="Phone number"
        returnKeyType="next"
        value={phone_number.value}
        onChangeText={(text) => setPhone_number({ value: text, error: '' })}
        error={!!phone_number.error}
        errorText={phone_number.error}
      />
</View>



</View>



      <Button
        mode="contained"
        onPress={()=>navigation.navigate('LocumProfileSetUp1')}
        style={{ marginTop: 10 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 2,
  },
  link: {
    fontWeight: 'bold',
    color: '#DD9C1F',
  },
})



/*
import React, { useContext,useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { useRoute } from "@react-navigation/native";

import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator1 } from '../helpers/passwordValidator1'
import { passwordValidator2 } from '../helpers/passwordValidator2'
import { nameValidator } from '../helpers/nameValidator'
import { contactValidator } from '../helpers/contactValidator'
import { usernameValidator } from '../helpers/usernameValidator'
import {AuthContext} from '../context/AuthContext'



export default function RegisterScreen({ navigation }) {



  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password1, setPassword1] = useState( null )
  const [password2, setPassword2] = useState(null)
  const [phone_number, setPhone_number] = useState(null)
  const [username, setUsername] = useState(null)


    const val=useContext(AuthContext);

    const {register}=useContext(AuthContext);



  const onSignUpPressed = () => {
       navigation.navigate ("OTP",{
      contact:phone_number.value,
      name:name.value,

    })

  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      <Header>Create Account</Header>
      <Text>{val}</Text>
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username}
        onChangeText={text => setUsername(text)}
        
        autoCapitalize="none"
        autoCompleteType="username"
        textContentType="username"
        keyboardType="username"

      />




      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={text=> setEmail(text )}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"

      />




  <TextInput
        label="Password"
        returnKeyType="done"
        value={password1}
        onChangeText={text => setPassword1( text )}
        
        secureTextEntry
      />



      <TextInput
        label="Repeat Password"
        returnKeyType="done"
        value={password2}
        onChangeText={text => setPassword2( text )}
        secureTextEntry
      />







<View style={{flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',marginLeft:-150, width:150,}}>
<View style={{paddingRight:10,width:150}}>
<TextInput

        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName( text)}
        

      />
</View>

<View style={{width:150}}>
<TextInput
        label="Phone number"
        returnKeyType="next"
        value={phone_number.value}
        onChangeText={text => setPhone_number( text )}
       
      />
</View>



</View>



      <Button
        mode="contained"
        onPress={() => {
          register(username,email,password1,password2,name,phone_number);
        }}
        style={{ marginTop: 10 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={onSignUpPressed }>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 2,
  },
  link: {
    fontWeight: 'bold',
    color: '#DD9C1F',
  },
})
*/ 
