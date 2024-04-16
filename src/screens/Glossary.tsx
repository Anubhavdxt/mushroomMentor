import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type GlossaryProps = NativeStackScreenProps<RootStackParamList, 'Glossary'>;

const Glossary = () => {
  return (
    <View>
      <Text>Glossary</Text>
    </View>
  );
};

export default Glossary;

const styles = StyleSheet.create({});
