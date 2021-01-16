import * as React from 'react';
import { Button, Text, Image, Linking, View, SafeAreaView, TouchableOpacity, Platform, DeviceEventEmitter } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import style from './style'
import Home from '../screens/home/index';
import Search from '../screens/search/index';
import Cart from '../screens/cart/index';
import Profile from '../screens/profile/index';
import images from '../common/helper/Images'

const BottomTab = createBottomTabNavigator()

class AppNavigator extends React.Component {


    render() {
        return (
            <SafeAreaView style={{ flex: 1, }} >
                <BottomTab.Navigator initialRouteName={'home'}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'home') {
                                iconName = focused ? images.homeinactive : images.homeactive
                            } else if (route.name === 'search') {
                                iconName = focused ? images.searchinactive : images.searchactive
                            }else if (route.name === 'cart') {
                                iconName = focused ? images.cartinactive : images.cartactive
                            }
                            else if (route.name === 'profile') {
                                iconName = focused ? images.profileactive : images.profileinactive
                            }
                            // You can return any component that you like here!
                            return  <Image source={iconName} style={{ width: wp('6%'), height: hp('3.5%') }} resizeMode='contain' />
                        },
                    })} tabBarOptions={{
                        activeTintColor: '#3498DB',
                        inactiveTintColor: '#BDC3C7',
                        style: { height: hp('7%'), paddingBottom: hp('0.5%') }
                    }}>
                    <BottomTab.Screen name="home" options={{ tabBarLabel: 'Home' }} component={Home} />
                    <BottomTab.Screen name="search" options={{ tabBarLabel: "Search", }} component={Search} />
                    <BottomTab.Screen name="cart" options={{ tabBarLabel: 'Cart' }} component={Cart} />
                    <BottomTab.Screen name="profile" options={{ tabBarLabel: "Profile", }} component={Profile} />
                </BottomTab.Navigator>
            </SafeAreaView>
        );
    }
}

export default AppNavigator;