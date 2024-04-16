import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

// Constants
import {COLORS} from '../constants';

export const Card = ({imageUrl, name, id}: Mushroom | Disease): JSX.Element => {
  return (
    <View style={styles.card} key={id}>
      <Image source={{uri: imageUrl}} style={styles.cardImage} />
      <Text style={styles.cardText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: COLORS.light,
    borderRadius: 10,
    gap: 10,
    margin: 10,
    paddingBottom: 10,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardText: {
    fontSize: 15,
    color: COLORS.primaryDark,
    fontWeight: 'bold',
  },
});
