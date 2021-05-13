import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { GradientProvider } from './src/context/GradientContext';

const App = () => {
    return (
        <NavigationContainer>
            <GradientProvider>
                <StackNavigation />
            </GradientProvider>
        </NavigationContainer>
    )
}

export default App
