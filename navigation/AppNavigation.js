import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import HomeScreen from '../screens/HomeScreen';
import NotesScreen from '../screens/NotesScreen';
import AmericanRecipesScreen from '../screens/AmericanRecipesScreen';
import BarbequeRecipesScreen from '../screens/BarbequeRecipesScreen';
import BreakfeastRecipesScreen from '../screens/BreakfeastRecipesScreen';
import ComfortFoodRecipesScreen from '../screens/ComfortFoodRecipesScreen';
import DesertRecipesScreen from '../screens/DesertRecipesScreen';
import FilipinoRecipesScreen from '../screens/FilipinoRecipesScreen';
import HispanicRecipesScreen from '../screens/HispanicRecipesScreen';
import ItalianRecipesScreen from '../screens/ItalianRecipesScreen';
import SeafoodRecipesScreen from '../screens/SeafoodRecipesScreen.';
import SlowCookerRecipesScreen from '../screens/SlowCookerRecipesScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#181818',
      },
      headerTintColor: 'white'
    }}>
      <Stack.Screen name="DSARecipes" component={HomeScreen} />
      {/* Add other screens here if needed */}
    </Stack.Navigator>
  );
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="DSA Recipes"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black'
        },
        drawerStyle: {
          backgroundColor: 'black',
        },
        drawerLabelStyle: {
          color: 'white',
        },
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'gray',
        headerTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'gray',
      }}
    >
      <Drawer.Screen name="DSARecipes" component={HomeScreen} />
      <Drawer.Screen name="American Recipes" component={AmericanRecipesScreen} />
      <Drawer.Screen name="Barbeque Recipes" component={BarbequeRecipesScreen} />
      <Drawer.Screen name="Breakfeast Recipes" component={BreakfeastRecipesScreen} />
      <Drawer.Screen name="Comfort Food Recipes" component={ComfortFoodRecipesScreen} />
      <Drawer.Screen name="Desert Recipes" component={DesertRecipesScreen} />
      <Drawer.Screen name="Filipino Recipes" component={FilipinoRecipesScreen} />
      <Drawer.Screen name="Hispanic Recipes" component={HispanicRecipesScreen} />
      <Drawer.Screen name="Italian Recipes" component={ItalianRecipesScreen} />
      <Drawer.Screen name="Seafood Recipes" component={SeafoodRecipesScreen} />
      <Drawer.Screen name="Slow Cooker Recipes" component={SlowCookerRecipesScreen} />
      <Drawer.Screen name="Notes" component={NotesScreen} />
    </Drawer.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;