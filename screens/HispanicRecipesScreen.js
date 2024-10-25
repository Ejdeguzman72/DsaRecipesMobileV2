import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import recipeJson from '../json/recipes.json';
import LandingScreen from './LandingScreen';
import AWS from 'aws-sdk'
import {AWS_ACCESS_KEY,AWS_SECRET_KEY,AWS_BUCKET_NAME,AWS_RECIPE_JSON_FILE,AWS_SDK_LOAD_CONFIG,AWS_REGION_NAME} from '@env';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: process.env.AWS_REGION_NAME
})

const s3 = new AWS.S3();

const HispanicRecipesScreen = () => {
  const handleButtonPress = () => {
    setLandingPageVisible(false);
    setRecipesVisible(true);
};
  const jsonData = recipeJson;
  const [recipeJsonData, setRecipeJsonData] = useState(null);
  const [landingPageVisible, setLandingPageVisible] = useState(true);
  const [recipesVisible, setRecipesVisible] = useState(false);

  const fetchJsonData = async () => {
    try {
      const params = {
        Bucket: AWS_BUCKET_NAME,
        Key: AWS_RECIPE_JSON_FILE
      };
      const data = await s3.getObject(params).promise();
      if (data != null) {
        const recipeContents = JSON.parse(data.Body.toString());
        setRecipeJsonData(recipeContents);
      } else {
        setRecipeJsonData(jsonData);
      }
    } catch (error) {
      console.log(`Error fetching JSON data: `, error);
    }
  }

  useEffect(() => {
    fetchJsonData();
  }, []);

  const filterRecipesByType = (recipes, description) => {
    return recipes.filter(recipe => recipe.descr === description);
  };

  let recipeDescr = 'HISPANIC';
  const filteredRecipes = recipeJsonData ? filterRecipesByType(recipeJsonData, recipeDescr) : [];

  return (
    <ScrollView style={styles.background}>
     {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))
      ) : (
        <Text style={styles.noRecipesText}>No recipes found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#202020'
  },
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

export default HispanicRecipesScreen;