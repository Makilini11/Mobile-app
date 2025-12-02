import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../services/FireBaseAuth';

export default function Register({navigation}:{navigation :any}) {
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
  const HandleRegister = () => {
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      alert("Usercreate Successfully!")
      setemail('')
      setpassword('')
      navigation.replace("PartnerChoice");
    })
    .catch((error)=>{

    })
    
  };
  const GoToLogin=()=>{
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Register</Text>
      
      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={setemail}
      />

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={setpassword}
      />

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={HandleRegister}/>
      </View>
      <View>
        <TouchableOpacity onPress={GoToLogin}>
        <Text style={styles.text}>Already have an account.<u>login</u></Text>
        
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
    marginTop: 10,
  },
  text:{
    color: '#2383f1ff',
  },
});