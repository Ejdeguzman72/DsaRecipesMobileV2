import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const NotesScreen = () => {
    return (
        <ScrollView style={styles.background}>
            <View style={styles.notesContainer}>
                <Text>I look at cooking as art so I really don't look to measure things that often.So when I have an amount listed,  it is just as a reference.
                    Since cooking is an art, modify the amounts based on your tastes.
                    In doing this, it takes a little bit of experience cooking the dishes listed. </Text>
                <Text>I really try to use a whole item when I cook so  it doesn't go to waste. Because of this, when I buy ingredients, I look for appropriate sizes.
                    Some  dishes mayneed a large onion while others may need a small onion as an example. Probably the one item that I don't do this for is garlic since
                    you  only need a few cloves off a head of garlic to cook.</Text>
            </View>
        </ScrollView>
    )
}

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
    },
    notesContainer: {
        textAlign: 'center',
        padding: 10,
        margin: 0
    }
  });

export default NotesScreen;