import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type RecipesProps = NativeStackScreenProps<RootStackParamList, 'Recipes'>;

const Recipes = ({navigation, route}: RecipesProps) => {
  return (
    <View>
      <Text>Recipes</Text>
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({});
