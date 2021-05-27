import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminAddItem from './AdminAddItem';
import AdminProfile from './AdminProfile';
import Menu from './Menu';
import Orders from './Orders';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Admin = () => {
    return (
        <Tab.Navigator initialRouteName="AddItem"
            tabBarOptions={{
                activeTintColor: '#F2A253',
            }}>
            <Tab.Screen name="Profile" component={AdminProfile} options={{
                tabBarIcon: ({ color, size }) => (<MaterialIcons name="account-circle" color={color} size={size} />)
            }}/>
            <Tab.Screen name="Add Item" component={AdminAddItem} options={{
                tabBarIcon: ({ color, size }) => (<Entypo name="add-to-list" color={color} size={size} />)
            }}/>
            <Tab.Screen name="Menu" component={Menu} options={{
                tabBarIcon: ({ color, size }) => (<MaterialIcons name="restaurant-menu" color={color} size={size} />)
            }}/>
            <Tab.Screen name="Orders" component={Orders} options={{
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="bell" color={color} size={size} />),
                tabBarBadge: 3,
                tabBarBadgeStyle: {color:'white',backgroundColor:'#F2A253'}
            }}/>
        </Tab.Navigator>
    )
}

export default Admin