import { initializeApp,getApps } from "firebase/app";
import{Auth ,getAuth} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyB2cX239k6AcAF9hnw26XHOj3vVgjTbH8Y",
  authDomain: "planner-app-dc604.firebaseapp.com",
  projectId: "planner-app-dc604",
  storageBucket: "planner-app-dc604.firebasestorage.app",
  messagingSenderId: "951390037638",
  appId: "1:951390037638:web:ac1d45e5156783da561307"
};

let auth:Auth;
    if(getApps().length===0){
        const app = initializeApp(firebaseConfig);
        auth=getAuth(app)
    }
    else{
        auth=getAuth()
    }
export default auth;