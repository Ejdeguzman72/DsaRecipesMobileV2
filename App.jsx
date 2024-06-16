import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { AppRegistry } from 'react-native';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  return (
    <AppNavigation />
  )
}

export default App;
AppRegistry.registerComponent('DsaRecipesMobileV2', () => App);