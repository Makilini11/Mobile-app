import { View, Text, Button, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import API from './api/api';
import auth from '../services/FireBaseAuth';

export default function Dashboard({ navigation }) {
  const [coupleData, setCoupleData] = useState(null);

  const fetchCoupleData = async () => {
    try {
      const userEmail = auth.currentUser.email;

      const res = await API.get(`/couples?user1=${userEmail}&user2=${userEmail}`);
      const data = res.data.find(
        (c) => c.user1 === userEmail || c.user2 === userEmail
      );

      setCoupleData(data);
    } catch (error) {
      console.log(error);
      alert('Failed to load dashboard ❌');
    }
  };

  useEffect(() => {
    fetchCoupleData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.replace('Login');
    } catch (error) {
      console.log(error);
    }
  };

  if (!coupleData) {
    return (
      <View style={styles.container}>
        <Text>Loading Dashboard...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.text}>Partner Code: {coupleData.partnerCode}</Text>
      <Text style={styles.text}>You: {auth.currentUser.email}</Text>
      <Text style={styles.text}>
        Partner: {coupleData.user1 === auth.currentUser.email ? coupleData.user2 : coupleData.user1}
      </Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:25, justifyContent:'center' },
  title:{ fontSize:24, textAlign:'center', marginBottom:20 },
  text:{ fontSize:16, marginBottom:10 }
});
