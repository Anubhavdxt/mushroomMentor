import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type ProductionTechProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductionTech'
>;

const ProductionTech = ({navigation, route}: ProductionTechProps) => {
  return (
    <View>
      <Text>Production Tech</Text>
    </View>
  );
};

export default ProductionTech;

const styles = StyleSheet.create({});
