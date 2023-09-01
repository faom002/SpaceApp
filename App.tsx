import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {


const handlePress = () => {
  console.log("Button pressed");
}



  return (
    <View style={styles.container}>
        

        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.belt}>Lets journey through the solar system together!</Text>
        <Text>Click on the button below to embark on the journey</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Continue</Text>          
        </TouchableOpacity>
          

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

    title: {
        color: 'white',
        maxWidth: "85%",
        alignContent: "center",
        textAlign: "center",
        fontSize: 40,
    },

  belt: {
    width: "80%",
    color: 'grey',
    textAlign: "center",

  },

  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: { 
    color: "black",
  }
});
