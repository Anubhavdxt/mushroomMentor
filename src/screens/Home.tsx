import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

// Constants
import {MENU_ITEMS} from '../data/constants';
import {COLORS} from '../constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps): JSX.Element => (
  <View style={styles.container}>
    {MENU_ITEMS.map(item => (
      <View key={item.id} style={styles.menu}>
        <Text
          onPress={() =>
            navigation.push(item.route as keyof RootStackParamList)
          }
          style={styles.menuText}>
          {item.title}
        </Text>
      </View>
    ))}
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: COLORS.dark,
  },
  menu: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  menuText: {
    fontSize: 24,
    color: COLORS.primary,
  },
});
