import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Movie } from '../interfaces/movieInterface';

import { DetailsScreen } from '../screens/DetailsScreen';
import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}