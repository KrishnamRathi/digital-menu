import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './src/screens/signIn/LoginScreen';
import SignupScreen from './src/screens/signUp/SignupScreen';
import Menu from './src/screens/Menu';
import Home from './src/screens/Home'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LoginScreen/> */}
      {/* <SignupScreen/> */}
      {/* <Text>hi</Text> */}
     {/* <Menu/> */}
     <Home/>
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
