import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, images} from '../constants';

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 15,
    paddingTop: 30,
  },
  navigationMenu: {
    width: '100%',
    paddingVertical: 16,
    rowGap: 6,
  },
  drawerOptions: {
    fontSize: 18,
  },
  button: {
    width: '100%',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: COLORS.dark,
    borderRadius: 4,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mushroom: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
  },
  mentor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  copyright: {
    backgroundColor: COLORS.lightWhite,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.gray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyrightText: {
    fontSize: 16,
    color: COLORS.gray,
    paddingVertical: 16,
  },
  image: {width: 120, height: 120},
});

const drawerOptions = [
  {
    id: 1,
    title: 'Know your mushroom',
    route: 'knowyourmushroom',
  },
  {
    id: 2,
    title: 'Production technology',
    route: 'productiontechnology',
  },
  {
    id: 3,
    title: 'Disease & pest identification',
    route: 'Option3',
  },
  {
    id: 4,
    title: 'Nutritional & medicinal value',
    route: 'Option4',
  },
  {
    id: 5,
    title: 'Government schemes',
    route: 'Option5',
  },
  {
    id: 6,
    title: 'Mushroom recipes',
    route: 'Option6',
  },
  {
    id: 7,
    title: 'FAQs and Glossary',
    route: 'Option7',
  },
  {
    id: 8,
    title: 'Contact Expert',
    route: 'Option8',
  },
];

const NavigationView = () => (
  <>
    <View style={styles.navigationContainer}>
      <View style={styles.center}>
        <Image source={images.logo} style={styles.image} />
        <View style={styles.flexRow}>
          <Text style={styles.mushroom}>mushroom</Text>
          <Text style={styles.mentor}>mentor</Text>
        </View>
      </View>
      <View style={styles.navigationMenu}>
        {drawerOptions.map(option => (
          <TouchableOpacity
            key={option.id}
            style={styles.button}
            onPress={() => {
              console.log(option.title);
            }}>
            <Text style={styles.drawerOptions}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    <View style={styles.copyright}>
      <Text style={styles.copyrightText}>Copyright © mushroommentor 2023</Text>
    </View>
  </>
);

export default NavigationView;
