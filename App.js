import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './src/screens/signIn/LoginScreen';
import SignupScreen from './src/screens/signUp/SignupScreen';
import Menu from './src/screens/Menu';
import Home from './src/screens/Home'
import Invoice from './src/screens/Invoice';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen/>
      {/* <SignupScreen/> */}
     {/* <Menu/> */}
     {/* <Home/> */}
     {/* <Invoice/> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#F9F9F9',
  },
});
