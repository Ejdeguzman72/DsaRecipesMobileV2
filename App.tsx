import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import RecipeCard from './components/RecipeCard';
import recipeJson from './json/recipes';
import LandingScreen from './components/LandingScreen';
import * as AWS from 'aws-sdk'
import Config from 'react-native-config';

AWS.config.update({
  accessKeyId: 'AKIARQOQA4S27VTS63VY',
  secretAccessKey: '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',
  region: 'us-east-1'
})

const App = () => {
  const jsonData = recipeJson;
  const [landingPageVisible, setLandingPageVisible] = useState(true);
  const [recipesVisible, setRecipesVisible] = useState(false);

  const handleButtonPress = () => {
    setLandingPageVisible(false);
    setRecipesVisible(true);
  };

  return (
    <ScrollView>
      {landingPageVisible && <><LandingScreen /><View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>DSA Recipes</Text>
        </TouchableOpacity>
      </View></>}
      {recipesVisible && (
        <>
          {jsonData.list.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    width: 250,
    opacity: 0.7,
    marginTop: 10 // Adjust spacing if needed
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default App;
