import React from 'react';
import { View, FlatList } from 'react-native';
import RecipeCard from './RecipeCard';
import recipeJson from '../json/recipes';

const App = () => {

    const recipes = recipeJson;

    return (
        <View style={{ padding: 20 }}>
            <FlatList
                data={recipes.list}
                keyExtractor={(item) => item.recipeId.toString()}
                renderItem={({ item }) => <RecipeCard recipe={item} />}
            />
        </View>
    );
};

export default App;
