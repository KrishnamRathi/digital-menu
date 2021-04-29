import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Menu from './src/screens/Menu';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu/>
    </SafeAreaView>
  );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
});
