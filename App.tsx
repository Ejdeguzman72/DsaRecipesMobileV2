// App.js
import React from 'react';
import { ScrollView } from 'react-native';
import RecipeCard from './components/RecipeCard';
import recipeJson from './json/recipes';

const App = () => {
  const jsonData = recipeJson;

  return (
    <ScrollView>
      {jsonData.list.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </ScrollView>
  );
};

export default App;
