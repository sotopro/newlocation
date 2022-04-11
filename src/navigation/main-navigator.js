import React from "react";
import {  Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS } from "../constants";

import PlaceList from "../screens/place-list";
import PlaceDetail from "../screens/place-detail";
import NewPlace from "../screens/new-place";
import Map from "../screens/map";
import HeaderButton from "../components/atoms/header-button";

const mainStack = createNativeStackNavigator();


const MainStackNavigator = () => {
    return (
        <mainStack.Navigator
            initialRouteName="Place"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
                <mainStack.Screen 
                    name="Place"
                    component={PlaceList}
                    options={({ navigation }) => (
                        {
                            title: 'Places',
                            headerRight: () => <HeaderButton navigation={navigation} />
                        }
                    )}/>
                <mainStack.Screen name="PlaceDetail" component={PlaceDetail} options={{ title: 'Place Details' }}/>
                <mainStack.Screen name="NewPlace" component={NewPlace} options={{ title: 'New Place' }}/>
                <mainStack.Screen name="Map" component={Map} options={{ title: 'Maps'  }}/>
            </mainStack.Navigator>
    )
}

export default MainStackNavigator;
