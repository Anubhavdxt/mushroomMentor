import React from 'react';
import {StatusBar} from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './screens/Home';
import MushroomDetails from './screens/MushroomDetails';
import KnowMushrooms from './screens/KnowMushrooms';
import PestIdentification from './screens/PestIdentification';

// Constants
import {COLORS} from './constants';
import NutritionalValue from './screens/NutritionalValue';
import ProductionTech from './screens/ProductionTech';
import GovernmentSchemes from './screens/GovernmentSchemes';
import Recipes from './screens/Recipes';
import Glossary from './screens/Glossary';
import ContactUs from './screens/ContactUs';
import NutritionDetails from './screens/NutritionDetails';

export type RootStackParamList = {
  Home: undefined;
  KnowMushrooms: undefined;
  MushroomDetails: Mushroom;
  ProductionTech: undefined;
  PestIdentification: undefined;
  NutritionalValue: undefined;
  NutritionDetails: Mushroom;
  GovernmentSchemes: undefined;
  Recipes: undefined;
  Glossary: undefined;
  ContactUs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightWhite} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Mushroom Mentor',
          }}
        />
        <Stack.Screen
          name="KnowMushrooms"
          component={KnowMushrooms}
          options={{
            title: 'Mushrooms of Meghalaya',
          }}
        />
        <Stack.Screen
          name="MushroomDetails"
          component={MushroomDetails}
          options={{
            title: 'Mushroom Details',
          }}
        />
        <Stack.Screen
          name="ProductionTech"
          component={ProductionTech}
          options={{
            title: 'Production Technology',
          }}
        />
        <Stack.Screen
          name="PestIdentification"
          component={PestIdentification}
          options={{
            title: 'Pest Identification',
          }}
        />
        <Stack.Screen
          name="NutritionalValue"
          component={NutritionalValue}
          options={{
            title: 'Nutritional & medicinal property',
            headerTitleStyle: {
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="NutritionDetails"
          component={NutritionDetails}
          options={{
            title: 'Nutritional Details',
            headerTitleStyle: {
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="GovernmentSchemes"
          component={GovernmentSchemes}
          options={{
            title: 'Government Schemes',
          }}
        />
        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={{
            title: 'Mushroom Recipes',
          }}
        />
        <Stack.Screen
          name="Glossary"
          component={Glossary}
          options={{
            title: 'FAQs and Glossary',
          }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            title: 'Contact Expert',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
