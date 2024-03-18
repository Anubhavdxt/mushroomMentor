import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const KnowYourMushroom = () => {
  return (
    <View style={styles.container}>
      <Text>KnowYourMushroom</Text>
    </View>
  );
};

export default KnowYourMushroom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
