import React from 'react';
import {StyleSheet, ScrollView, TextInput, Button} from 'react-native';
import MyToast from 'react-native-my-toast-module';

const App = () => {
  const [toastMessage, onChangeText] = React.useState("I'm a Toast");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Enter toast message"
        value={toastMessage}
      />
      <Button
        title="Show Toast"
        onPress={() => {
          MyToast.show(toastMessage);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: 20,
    padding: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default App;
