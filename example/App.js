import React from 'react';
import {StyleSheet, ScrollView, Button} from 'react-native';
import MyToast from 'react-native-my-toast-module';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        title="Show Toast"
        onPress={() => {
          MyToast.show("I'm a Toast");
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
