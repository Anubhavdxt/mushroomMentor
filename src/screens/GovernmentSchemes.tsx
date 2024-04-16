import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type GovernmentSchemesProps = NativeStackScreenProps<
  RootStackParamList,
  'GovernmentSchemes'
>;

const GovernmentSchemes = ({navigation, route}: GovernmentSchemesProps) => {
  return (
    <View>
      <Text>Government Schemes</Text>
    </View>
  );
};

export default GovernmentSchemes;

const styles = StyleSheet.create({});
