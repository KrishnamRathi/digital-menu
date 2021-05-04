import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, ActivityIndicator, StatusBar } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import Menu from './src/screens/Menu';
import Home from './src/screens/Home'
import Orders from './src/screens/Orders';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'
import Invoice from './src/screens/Invoice';



const Stack = createStackNavigator();

export default function App() {
  const loading = useSelector(state => state.status.loading)
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#F2A253"
      />
      {loading ? <ActivityIndicator size="large" style={{ height: '100%', zIndex: 1000 }} color="#0000ff" /> : null}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Menu" component={Menu} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        {/* <Orders /> */}
        {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});
