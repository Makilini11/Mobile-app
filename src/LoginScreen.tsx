import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../services/FireBaseAuth';

export default function Login({navigation}:{navigation :any}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errormessage, seterrormesage]=useState('');

  const HandleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Successfully!");
        
        navigation.navigate("PartnerChoice");

        
      })
      .catch((error) => {
      seterrormesage('Invalid email and password')
      });
  };
const GoToRegister=()=>{
   navigation.navigate("Register")
}
  return (
   
    <View style={styles.container}>
        

      
      <Text style={styles.title}>Login</Text>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"

        onChangeText={setEmail}
        value={email}
      />

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={setPassword}   
        value={password}
      />

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={HandleLogin} />
      </View>
      <Text style={styles.error}>{errormessage}</Text>
      <View>
        <TouchableOpacity onPress={GoToRegister}>
          <Text style={styles.text}>Don't have an account? <u>Register</u></Text>
        </TouchableOpacity>
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
   
    
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: 'white'
  },
  buttonContainer: {
    marginTop: 10,
  },
  error:{
  color: '#e21616ff',
  },
  text:{
    color: '#2383f1ff',
  }
});
