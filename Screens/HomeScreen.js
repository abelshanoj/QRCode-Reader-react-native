import React from "react";
import { View,Text, Button } from "react-native";

export default HomeScreen =({navigation})=>{
 return(
  <View style={style.container}>
  <Button title="Scan" onPress={()=>navigation.navigate('Home')}/>
 </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});