import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStackNavigator from './main-navigator'

const navigation = () => {
    return (
        <NavigationContainer>
        <MainStackNavigator />
    </NavigationContainer>
    )
}

export default navigation;
