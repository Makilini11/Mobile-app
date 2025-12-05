import { View, Text, Button, StyleSheet } from 'react-native';
import Colour from '../shared/Colour';

export default function PartnerChoice({navigation}:{navigation :any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Do you have a Partner Code?
      </Text>

      <Button
        title="YES, I have code" 
        onPress={() => navigation.navigate("PartnerLink", { hasCode: true })}  color={Colour.Primary}
      />

      <View style={{ marginTop: 20 }} />

      <Button
        title="NO, create new code"
        onPress={() => navigation.navigate("PartnerLink", { hasCode: false })}  color={Colour.Primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', padding:20 ,backgroundColor:Colour.Secondary},
  title:{ fontSize:18, textAlign:'center', marginBottom:30 ,color: Colour.Text,}
});
