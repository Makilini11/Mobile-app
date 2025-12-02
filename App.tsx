import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/RegisterScreen';
import Login from './src/LoginScreen';
import LinkPartner from './src/LinkPartnerScreen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './services/FireBaseAuth';
import PartnerChoice from './src/PartnerChoiceScreen';
import Dashboard from './src/HomeScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  const[isLoggedIn,setisLoggedIn]=useState(false)
  useEffect(()=>{
    const subScribe=
    onAuthStateChanged(auth,(user)=>{

      (user)

    })
  })
  return (
      
    <View style={styles.container}>
      
        
      <NavigationContainer> 
              <Stack.Navigator initialRouteName='Login'> 
                <Stack.Screen name='Register' component={Register}/> 
                <Stack.Screen name='Login' component={Login}/> 
                
                <Stack.Screen name="PartnerChoice" component={PartnerChoice} />
                <Stack.Screen name="PartnerLink" component={LinkPartner} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                 
              
                
              </Stack.Navigator>
            </NavigationContainer>
                  <StatusBar style="auto" /> 
    </View>
    
)}

const styles = StyleSheet.create({
   background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    
    
  },
});