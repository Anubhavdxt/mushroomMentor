import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

// Constants
import {COLORS} from '../constants';
import {NUTRITIONAL_DATA} from '../data/constants';
import {Card} from '../components/Card';

type NutritionValueProps = NativeStackScreenProps<
  RootStackParamList,
  'NutritionalValue'
>;

const NutritionalValue = ({navigation, route}: NutritionValueProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Nutritional & medicinal values</Text>
      <Text style={styles.heading}>Common mushrooms</Text>
      <FlatList
        data={NUTRITIONAL_DATA}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('NutritionDetails', item)}>
            <Card name={item.name} id={item.id} imageUrl={item.imageUrl} />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
      <Text>Nutritional Facts</Text>
      <Text>Health Benefits</Text>
      <Text>Dos and don'ts</Text>
    </View>
  );
};

export default NutritionalValue;

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
});
