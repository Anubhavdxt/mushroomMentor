import React from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

// Constants
import {COLORS} from '../constants';
import {MUSHROOM_DATA} from '../data/constants';
import {Card} from '../components/Card';

type KnowMushroomsProps = NativeStackScreenProps<
  RootStackParamList,
  'KnowMushrooms'
>;

const KnowMushrooms = ({navigation, route}: KnowMushroomsProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={MUSHROOM_DATA}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('MushroomDetails', item)}>
            <Card imageUrl={item.imageUrl} name={item.name} id={item.id} />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default KnowMushrooms;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    paddingVertical: 5,
  },
});
