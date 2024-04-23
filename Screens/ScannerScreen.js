import React, { useEffect, useState } from "react";
import { View,Text, Button } from "react-native";
import {Camera,CameraView} from 'expo-camera'
const ScannerScreen = ()=>{
 const [hasPermission,setHasPermission]=useState(false);
 const [scanned,setScanned]=useState(false);

 useEffect(()=>{
  const getCameraPermissions =async ()=>{
   const{status}=await Camera.requestCameraPermissionsAsync();
   setHasPermission(status=="granted");
  }
  getCameraPermissions();
 },[]);

 const handleBarCodeScanner =({type,data})=>{
  setScanned(true);
  alert(`Barcode with type ${type} and data ${data} has been scanned`)
 }

return (
 <View>
  <CameraView onBarCodeScanned={scanned ? undefined : handleBarCodeScanner} barcodeScannerSettings={{
  barcodeTypes: ["qr", "pdf417"],}}/>
  {scanned && (<Button title="Tap again to scan" onPress={()=>setScanned(false)}/>)}
 </View>
);

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default ScannerScreen;