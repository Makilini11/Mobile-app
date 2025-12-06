// import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
// import { Stack} from 'expo-router'
// import { tokenCache } from '@clerk/clerk-expo/token-cache'
// import { useEffect } from 'react'
// import * as WebBrowser from 'expo-web-browser'
// import * as AuthSession from '@clerk/clerk-expo'
// import {useSSO} from '@clerk/clerk-expo'

// export default function RootLayout() {
  
//   return (
//     <ClerkProvider tokenCache={tokenCache}>
//         {/* <Stack screenOptions={{
//             headerShown:false
//         }}> */}
//         <Stack.Screen name ="Index"/>
//     </ClerkProvider>
//   )
// }import { Platform, Text, View, TextInput, Dimensions,StyleSheet, TouchableOpacity ,ImageBackground} from 'react-native';
// import { Image } from 'react-native';
// import Colour from '../shared/Colour';
// import { useAuth } from '@clerk/clerk-expo';
// import { useCallback, useEffect } from 'react';
// import * as WebBrowser from 'expo-web-browser'
// import * as AuthSession from '@clerk/clerk-expo'
// import {useSSO} from '@clerk/clerk-expo'
// import { useRoute } from '@react-navigation/native';
// export const useWarmUpBrowser =()=>{
//     useEffect(()=> {
//         void WebBrowser.warmUpAsync()
//         return ()=>{
//             void WebBrowser.coolDownAsync()
//         }
//     },[])
// }
// WebBrowser.maybeCompleteAuthSession()
// export default function Index({navigation}:{navigation :any}){
//       const {isSignedIn}=useAuth()
//       const router =useRoute()
//       const {user}=AuthSession.useUser();
//       console.log(user?.primaryEmailAddress?.emailAddress);
      
//         useEffect(()=>{
//             if(isSignedIn)
//             {
    
//             }
//         },[isSignedIn])
//     useWarmUpBrowser()

//     const {startSSOFlow}=useSSO()
//     const onLoginPress =useCallback(async ()=>{
//         try {
//           const {createdSessionId, setActive, signIn,signUp}=await startSSOFlow({
//             strategy:'oauth_google',
//             redirectUrl:AuthSession.makeRedirectUrl(),

//           })
//           if (createdSessionId){
//             setActive!({
//                 session:createdSessionId,
//                 navigate:async({session})=>{
//                     if (session?currentTask){
//                         console.log(session?.currentTask);
//                         return
//                         router.push('/')
//                     }
//                 },
//             })
//           }else{}
//         }catch(err){
//             console.error(JSON.stringify(err,null,2))
//         }
//     },[])
//     // const GoToLogin=()=>{navigation.navigate("Login")
// }
//     return(
//         <>
//         {/* <ImageBackground 
//             source={require('../assets/bg.png')}
//             resizeMode="repeat" // 👈 Repeat option
//             style={styles.backgroundContainer}
//             imageStyle={styles.patternTile}
//         > */}
//         <View style={styles.container}>
//             <Image source={require('../assets/logo.png')} style={styles.image} />
//             <Text style={styles.text}>Welcome To Couple Planner App</Text>


//         </View>
        
//         <TouchableOpacity onPress={onLoginPress} style={styles.start1}>
//                 <Text style={styles.start2}>Get Started</Text>
//         </TouchableOpacity></>
        
//     )


// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         padding:20,
//         paddingTop:Platform.OS=='web'?30:40,
//         justifyContent:'center',
//         backgroundColor:Colour.Secondary,
      
//     },
//     image:{
//         width:Dimensions.get('screen').width*0.85,
//         height:280,
//         resizeMode:'contain',
//         marginTop:100
//     },
//     text:{
//         fontSize:28,
//         fontWeight:'bold',
//         textAlign:'center',
//         marginBottom:10,
//         color:Colour.Text

//     },
//     start1:{
//         width:'100%',
//         padding:15,
//         backgroundColor:Colour.Primary,
//         borderRadius:12,
//         marginTop:50
//     },
//     start2:{
//         color:Colour.Text,
//         textAlign:'center',
//         fontSize:16,
//         fontWeight:'bold'

//     },
//     backgroundContainer: {
//         flex: 1,
//         backgroundColor: '#FFC0CB', // Base Light Pink
//     },
//     patternTile: {
//         width: 30, // Ungal pattern image-in size (e.g., 30px x 30px)
//         height: 30
//     }
// })