import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

// Constants
import {COLORS} from '../constants';

type MushroomDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'MushroomDetails'
>;

const MushroomDetails = ({navigation, route}: MushroomDetailsProps) => {
  const {id, name, imageUrl, description} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default MushroomDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    paddingVertical: 15,
  },
  image: {
    width: '100%',
    height: 300,
  },
  descriptionContainer: {
    padding: 15,
  },
  description: {
    fontSize: 16,
    color: COLORS.light,
    textAlign: 'justify',
  },
});
