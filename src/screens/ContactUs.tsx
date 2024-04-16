import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type ContactUsProps = NativeStackScreenProps<RootStackParamList, 'ContactUs'>;

const ContactUs = ({navigation, route}: ContactUsProps) => {
  return (
    <View>
      <Text>ContactUs</Text>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
