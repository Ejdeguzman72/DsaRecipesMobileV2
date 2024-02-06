// RecipeCard.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const RecipeCard = ({ recipe }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableHighlight onPress={openModal}>
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.cardTitle}>{`${recipe.name} - ${recipe.descr}`}</Card.Title>
        </Card>
      </TouchableHighlight>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Card containerStyle={styles.modalCard}>
            <Card.Title>{`${recipe.name} - ${recipe.descr}`}</Card.Title>
            <ScrollView>
              <Text style={styles.subtitle}>Ingredients:</Text>
                {recipe.ingredients.map((ingredient,index) => (
                  <Text key={index} style={styles.subtitle}>{ingredient}</Text>
                ))}
              <Text style={styles.subtitle}>Directions:</Text>
              {recipe.directions.map((direction,index) => (
                  <Text key={index} style={styles.subtitle}>{direction}</Text>
                ))}
              <TouchableHighlight onPress={closeModal}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableHighlight>
            </ScrollView>
          </Card>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#333',
  },
  cardTitle: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B1212'
  },
  modalCard: {
    padding: 20,
    borderRadius: 10
  },
  subtitle: {
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black'
  },
  listItem: {
    padding: 0,
    color: 'black'
  },
  closeButton: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default RecipeCard;
