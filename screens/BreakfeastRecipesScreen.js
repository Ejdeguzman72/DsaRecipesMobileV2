import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import recipeJson from '../json/recipes';
import LandingScreen from './LandingScreen';
import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.API_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
})

const s3 = new AWS.S3();

const BreakfeastRecipesScreen = () => {
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
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: process.env.AWS_RECIPE_JSON_FILE
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

  return (
    <ScrollView style={styles.background}>
      {recipeJsonData && (
        <>
          {recipeJsonData.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </>
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

export default BreakfeastRecipesScreen;