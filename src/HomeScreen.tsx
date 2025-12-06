// import { View, Text, Button, StyleSheet } from 'react-native';
// import { useEffect, useState } from 'react';
// import API from './api/api';
// import auth from '../services/FireBaseAuth';

// export default function Dashboard({navigation}:{navigation :any}) {
//   const [coupleData, setCoupleData] = useState(null);

//   const fetchCoupleData = async () => {
//     try {
//       const userEmail = auth.currentUser.email;

//       const res = await API.get(`/couples?user1=${userEmail}&user2=${userEmail}`);
//       const data = res.data.find(
//         (c) => c.user1 === userEmail || c.user2 === userEmail
//       );

//       setCoupleData(data);
//     } catch (error) {
//       console.log(error);
//       alert('Failed to load dashboard ❌');
//     }
//   };

//   useEffect(() => {
//     fetchCoupleData();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await auth.signOut();
//       navigation.replace('Login');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!coupleData) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading Dashboard...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Dashboard</Text>
//       <Text style={styles.text}>Partner Code: {coupleData.partnerCode}</Text>
//       <Text style={styles.text}>You: {auth.currentUser.email}</Text>
//       <Text style={styles.text}>
//         Partner: {coupleData.user1 === auth.currentUser.email ? coupleData.user2 : coupleData.user1}
//       </Text>

//       <View style={{ marginTop: 20 }}>
//         <Button title="Logout" onPress={handleLogout} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{ flex:1, padding:25, justifyContent:'center' },
//   title:{ fontSize:24, textAlign:'center', marginBottom:20 },
//   text:{ fontSize:16, marginBottom:10 }
// });
import { View, Text, TouchableOpacity,StyleSheet,Button } from 'react-native';
import React from 'react';

export default function Dashboard({navigation}:{navigation :any}) {
  const Task= () => {
     navigation.navigate("task");
  }
  const Note = () => {
     navigation.navigate("note");
  }
  const Expenses = () => {
     navigation.navigate("expenses");
  }
  return (
    // <View style={{ flex: 1, padding: 20 }}>
      
    //   <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
    //     Hi User 👋
    //   </Text>
    //   <Text style={{ opacity: 0.6 }}>Welcome back!</Text>

    //   <View style={{ marginTop: 30 }}>
    //     <TouchableOpacity style={styles.card}>
    //       <Text style={styles.cardTitle}>My Tasks</Text>
    //       <Text style={styles.cardCount}>3 pending</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity style={styles.card}>
    //       <Text style={styles.cardTitle}>Expenses</Text>
    //       <Text style={styles.cardCount}>₹1200 spent</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity style={styles.card}>
    //       <Text style={styles.cardTitle}>Notes</Text>
    //       <Text style={styles.cardCount}>5 notes</Text>
    //     </TouchableOpacity>
    //   </View>

    // </View>
    <View >
            <Button title="Task" onPress={Task}  />
            <Button title="Note" onPress={Note} />
            <Button title="Expenses" onPress={Expenses} />
          </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginVertical: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  cardCount: {
    marginTop: 5,
    opacity: 0.6,
  },
});