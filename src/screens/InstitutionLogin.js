import React, { useContext,useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator1 } from '../helpers/passwordValidator1'


export default function InstitutionLogin({ navigation }) {

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })


  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator1(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    navigation.reset({
          index: 0,
          routes: [{ name: 'InstitutionDrawer' }],
         
        })


    


    // else{
    //   auth
    //   .SignInUserWithEmailAndPassword(email,password)
    //   .then(userCredentials=>{
    //     const user = userCredentials.user;
    //     console.log(user.email);
        
    //   })

    //   .catch(error=>alert(error.message))

    // }
  }
  
    
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo /> 
      <Header><Text>Welcome to </Text><Text style={{color:'#DD9C1F'}}>LOCUM <Text style={{color:'#DD9C1F', fontWeight:'bold'}}>X</Text></Text></Header>
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
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Sign in
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: '#DD9C1F',
    
  },
  link: {
    fontWeight: 'bold',
    color: '#DD9C1F',
  },
  
})
