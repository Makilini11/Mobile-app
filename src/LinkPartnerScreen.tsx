import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import API from './api/api';
import auth from '../services/FireBaseAuth';
import Colour from '../shared/Colour';


export default function LinkPartner({ route, navigation }: { route: any; navigation: any }) {
  const hasCode = route?.params?.hasCode ?? false;
  const [partnerCode, setPartnerCode] = useState('');

  const generateCode = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const handleContinue = async () => {
    const user = auth.currentUser;

  if (!user || !user.email) {
    alert("User not authenticated ❌");
    return;
  }

  const userEmail = user.email;

    try {
    if (hasCode) {
      if (!partnerCode) {
        alert("Enter partner code");
        return;
      }
      const res = await API.get(`/couples?partnerCode=${partnerCode}`);

      if (res.data.length === 0) {
        alert("Invalid Partner Code ❌");
        return;
      }

      const couple = res.data[0];

      if (couple.user2) {
        alert("Code already used ❌");
        return;
      }

      await API.put(`/couples/${couple.id}`, {
        ...couple,
        user2: userEmail,
      });

      navigation.replace("Dashboard");
    } else {
      const newCode = generateCode();

      await API.post("/couples", {
        partnerCode: newCode,
        user1: userEmail,
        user2: null,
      });

      alert(`Your Partner Code: ${newCode}`);
      navigation.replace("Dashboard");
    }
  } catch (err) {
    alert("Something went wrong ❌");
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partner Linking</Text>

      {hasCode && (
        <TextInput
          style={styles.input}
          placeholder="Enter Partner Code"
          keyboardType="numeric"
          value={partnerCode}
          onChangeText={setPartnerCode}
      
        />
      )}

      <Button title="Continue" onPress={handleContinue}  color={Colour.Primary}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:25, justifyContent:'center',backgroundColor:Colour.Secondary },
  title:{ fontSize:22, textAlign:'center', marginBottom:20,color:Colour.Text },
  input:{ borderWidth:1, padding:12, marginBottom:15,color:Colour.Text }
});