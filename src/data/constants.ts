export const MENU_ITEMS: Menu[] = [
  {
    id: 1,
    title: 'Know your mushroom',
    route: 'KnowMushrooms',
  },
  {
    id: 2,
    title: 'Production technology',
    route: 'ProductionTech',
  },
  {
    id: 3,
    title: 'Disease & pest identification',
    route: 'PestIdentification',
  },
  {
    id: 4,
    title: 'Nutritional & medicinal value',
    route: 'NutritionalValue',
  },
  {
    id: 5,
    title: 'Government schemes',
    route: 'GovernmentSchemes',
  },
  {
    id: 6,
    title: 'Mushroom recipes',
    route: 'Recipes',
  },
  {
    id: 7,
    title: 'FAQs and Glossary',
    route: 'Glossary',
  },
  {
    id: 8,
    title: 'Contact Expert',
    route: 'ContactUs',
  },
];

export const MUSHROOM_DATA: Mushroom[] = [
  {
    id: 1,
    name: 'Shiitake Mushroom',
    imageUrl: 'https://thumbs2.imgbox.com/c9/b1/v5EwR3wq_t.jpg',
    description:
      'It grows extensively in decaying logs of Daks Jolcham oak, Sawtooth oak, Horn beans and chestnut in Meghalaya forests.',
  },
  {
    id: 2,
    name: 'Tit Duma',
    imageUrl: 'https://thumbs2.imgbox.com/ab/7f/Epmwy4iH_t.jpg',
    description:
      'The cap is funnel shaped. The stem is about 2 cm long, tout and the cap are 5-8 cm across and grey brownish in colour.',
  },
  {
    id: 3,
    name: 'Tit Kseh',
    imageUrl: 'https://thumbs2.imgbox.com/37/8f/1K12XI9P_t.jpg',
    description:
      'These are ectomycorrhizal fungi, existing in a symbiotic relationship with various species of coniferous or broad-leaved trees.',
  },
  {
    id: 4,
    name: 'Tit Stem',
    imageUrl: 'https://thumbs2.imgbox.com/af/2a/t7cps8Fx_t.jpg',
    description:
      'This mushroom species is cone-shaped, crimped, lobed ends, convex, thin, often several near each other. It has bright orange to yellow and does not have gills and has a strong fragrance.',
  },
  {
    id: 5,
    name: 'Tit Doh',
    imageUrl: 'https://thumbs2.imgbox.com/44/99/NlYxrU5n_t.jpg',
    description:
      'It is mycorrhizal fungus, its fruit bodies grow on the ground at the base of various species of trees from summer to autumn, either individually or in groups. It also has a distinctive fishy smell which does not affect its taste. The odour disappears during cooking. The latex only has a mild taste.',
  },
  {
    id: 6,
    name: 'Tit Khangai Pylleng',
    imageUrl: 'https://thumbs2.imgbox.com/c4/7d/shL0NTyr_t.jpg',
    description:
      'A commonly eaten and favoured mushroom, the chanterelle is typically harvested from late summer to late fall. It is used in many culinary dishes, and can be preserved by either drying or freezing. An oven should not be used when drying it because it can result in the mushroom becoming bitter. ',
  },
  {
    id: 7,
    name: 'Tit Tyngab',
    imageUrl: 'https://thumbs2.imgbox.com/c9/ac/Mm82xEwZ_t.jpg',
    description:
      'Some species of Laccaria may serve as pioneers in disturbed ground or de-forested areas that eventually turns to a "mature" ecosystem. Several species of Laccaria are frequently found in young pine plantations.',
  },
  {
    id: 8,
    name: 'Tit Ibong Hati',
    imageUrl: 'https://thumbs2.imgbox.com/fc/7f/enWOdajU_t.jpg',
    description:
      'These are fleshy cauliflower-like masses with a stout central stem that splits into a few lower primary branches before branching densely above.',
  },
  {
    id: 9,
    name: 'Tit Thnat Syiar',
    imageUrl: 'https://thumbs2.imgbox.com/5a/b3/kR8pZm8m_t.jpg',
    description:
      'Characterized by having extensively branched fruiting bodies and often look like coral. These are found to be distributed on soil or leaf litter. Clavulina species are important primary colonizers of forest litter and occur immediately after the pre-monsoon showers.',
  },
];
export const NUTRITIONAL_DATA: Mushroom[] = [
  {
    id: 1,
    name: 'Oyster Mushroom',
    imageUrl: 'https://images2.imgbox.com/49/d3/ZVswBjAN_o.png',
    description:
      'Oyster mushrooms carries relatively high amounts of good quality protein than other cultivated mushrooms. \nOyster mushrooms contain good quality fibre which helps in lowering the cholesterol. \nFresh mushroom is an excellent source of folic acid (38 μg 9.5% per 100 g). \nPleuran, a polysaccharide present in oyster mushrooms, is a potent antioxidant that helps in protecting body cells from free radicals, which can cause heart disease and even cancer. It specifically combats colon cancer. \nOyster mushrooms contains ample number of vitamins and mineral. \nVitamin B2, B3, B5, B6, D, and A are known to be essential for leucocyte functioning. Among the cultivated mushrooms, oyster mushrooms contain higher amount of niacin (Vitamin B2) which helps iron mobilization in body and in functioning of muscles and neurological systems. \nVitamin D content is high in oyster mushrooms which is required to maintain insulin in bodies which in turn lowers the risk of type 1 and II diabetes. Calcium, phosphorus and vitamin D helps maintain oral health and bone density. \nThey are high in phosphorus, magnesium, calcium, salt, iron, and zinc, all of which are necessary for the human body to develop robust immunity.',
    nutritionalValue: [
      {name: 'Calories', value: '33'},
      {name: 'Protein', value: '3.31g'},
      {name: 'Fat', value: '0.41 g'},
      {name: 'Carbohydrate', value: '6.09 g'},
      {name: 'Dietary fibre', value: '2.3 g'},
      {name: 'Potassium', value: '420 mg'},
      {name: 'Calcium', value: '3 mg'},
      {name: 'Niacin (Vitamin B3)', value: '5 mg'},
      {name: 'Pantothenic acid (Vitamin B5)', value: '1.3 mg'},
      {name: 'Riboflavin (Vitamin B2)', value: '0.3 mg'},
      {name: 'Iron', value: '0.5 mg'},
      {name: 'Vitamin-D', value: '29 IU mg'},
      {name: 'Folates', value: '38 μg'},
    ],
  },
  {
    id: 2,
    name: 'Button Mushroom',
    imageUrl: 'https://images2.imgbox.com/49/d3/ZVswBjAN_o.png',
    description:
      'Oyster mushrooms carries relatively high amounts of good quality protein than other cultivated mushrooms. \nOyster mushrooms contain good quality fibre which helps in lowering the cholesterol. \nFresh mushroom is an excellent source of folic acid (38 μg 9.5% per 100 g). \nPleuran, a polysaccharide present in oyster mushrooms, is a potent antioxidant that helps in protecting body cells from free radicals, which can cause heart disease and even cancer. It specifically combats colon cancer. \nOyster mushrooms contains ample number of vitamins and mineral. \nVitamin B2, B3, B5, B6, D, and A are known to be essential for leucocyte functioning. Among the cultivated mushrooms, oyster mushrooms contain higher amount of niacin (Vitamin B2) which helps iron mobilization in body and in functioning of muscles and neurological systems. \nVitamin D content is high in oyster mushrooms which is required to maintain insulin in bodies which in turn lowers the risk of type 1 and II diabetes. Calcium, phosphorus and vitamin D helps maintain oral health and bone density. \nThey are high in phosphorus, magnesium, calcium, salt, iron, and zinc, all of which are necessary for the human body to develop robust immunity.',
    nutritionalValue: [
      {name: 'Energy', value: '22 kcal'},
      {name: 'Carbohydrate', value: '3.26 g'},
      {name: 'Protein', value: '2.18 g'},
      {name: 'Fat', value: '0.34 g'},
      {name: 'Dietary fibre', value: '1 g'},
      {name: 'Potassium', value: '318 mg'},
      {name: 'Niacin (Vitamin B3)', value: '3.607 mg'},
      {name: 'Vitamin D', value: '7 IU mg'},
      {name: 'Riboflavin (Vitamin B2)', value: '0.402 mg'},
      {name: 'Sodium', value: '5 mg'},
      {name: 'Selenium', value: '9.5 mcg'},
      {name: 'Pantothenic acid', value: '1.497 mg'},
      {name: 'Pyridoxine (B-6)', value: '0.104 mg'},
    ],
  },
  {
    id: 3,
    name: 'Shittake Mushroom',
    imageUrl: 'https://thumbs2.imgbox.com/c9/b1/v5EwR3wq_t.jpg',
    description:
      'Oyster mushrooms carries relatively high amounts of good quality protein than other cultivated mushrooms. \nOyster mushrooms contain good quality fibre which helps in lowering the cholesterol. \nFresh mushroom is an excellent source of folic acid (38 μg 9.5% per 100 g). \nPleuran, a polysaccharide present in oyster mushrooms, is a potent antioxidant that helps in protecting body cells from free radicals, which can cause heart disease and even cancer. It specifically combats colon cancer. \nOyster mushrooms contains ample number of vitamins and mineral. \nVitamin B2, B3, B5, B6, D, and A are known to be essential for leucocyte functioning. Among the cultivated mushrooms, oyster mushrooms contain higher amount of niacin (Vitamin B2) which helps iron mobilization in body and in functioning of muscles and neurological systems. \nVitamin D content is high in oyster mushrooms which is required to maintain insulin in bodies which in turn lowers the risk of type 1 and II diabetes. Calcium, phosphorus and vitamin D helps maintain oral health and bone density. \nThey are high in phosphorus, magnesium, calcium, salt, iron, and zinc, all of which are necessary for the human body to develop robust immunity.',
    nutritionalValue: [
      {name: 'Calories', value: '34 kcal'},
      {name: 'Carbohydrate', value: '3.26 g'},
      {name: 'Protein', value: '2.24 g'},
      {name: 'Fat', value: '0.49g'},
      {name: 'Dietary fibre', value: '2.5 g'},
      {name: 'Potassium', value: '304 mg'},
      {name: 'Niacin (Vitamin B3)', value: '3.887 mg'},
      {name: 'Riboflavin (Vitamin B2)', value: '0.217 mg'},
      {name: 'Sodium', value: '9 mg'},
      {name: 'Selenium', value: '5.7 μg'},
      {name: 'Vitamin-D', value: '18 IU mg'},
      {name: 'Pantothenic acid (Vitamin B5)', value: '1.500 mg'},
      {name: 'Pyridoxine (B-6)', value: '1.293'},
    ],
  },
  {
    id: 4,
    name: 'Paddy straw',
    imageUrl: 'https://images2.imgbox.com/49/d3/ZVswBjAN_o.png',
    description:
      'Oyster mushrooms carries relatively high amounts of good quality protein than other cultivated mushrooms. \nOyster mushrooms contain good quality fibre which helps in lowering the cholesterol. \nFresh mushroom is an excellent source of folic acid (38 μg 9.5% per 100 g). \nPleuran, a polysaccharide present in oyster mushrooms, is a potent antioxidant that helps in protecting body cells from free radicals, which can cause heart disease and even cancer. It specifically combats colon cancer. \nOyster mushrooms contains ample number of vitamins and mineral. \nVitamin B2, B3, B5, B6, D, and A are known to be essential for leucocyte functioning. Among the cultivated mushrooms, oyster mushrooms contain higher amount of niacin (Vitamin B2) which helps iron mobilization in body and in functioning of muscles and neurological systems. \nVitamin D content is high in oyster mushrooms which is required to maintain insulin in bodies which in turn lowers the risk of type 1 and II diabetes. Calcium, phosphorus and vitamin D helps maintain oral health and bone density. \nThey are high in phosphorus, magnesium, calcium, salt, iron, and zinc, all of which are necessary for the human body to develop robust immunity.',
    nutritionalValue: [
      {name: 'Calories', value: '33 kcal'},
      {name: 'Carbohydrate', value: '3.26 g'},
      {name: 'Protein', value: '3.8 g'},
      {name: 'Fat', value: '0.7g'},
      {name: 'Dietary fibre', value: '2.5 g'},
      {name: 'Potassium', value: ''},
      {name: 'Niacin (Vitamin B3)', value: ''},
      {name: 'Riboflavin (Vitamin B2)', value: ''},
      {name: 'Sodium', value: ''},
      {name: 'Selenium', value: ''},
      {name: 'Vitamin-D', value: ''},
    ],
  },
];

export const NUTRITIONAL_HEADER: TableRow = {
  name: 'Nutrient',
  value: 'Quantity',
};

export const OYSTER_MUSHROOM: Mushroom[] = [
  {
    id: 1,
    name: 'Black Oyster',
    imageUrl: 'https://images2.imgbox.com/0f/f8/14OZcZEQ_o.jpg',
  },
  {
    id: 2,
    name: 'Blue Oyster',
    imageUrl: 'https://images2.imgbox.com/e1/b8/cwSm9Jdj_o.jpg',
  },
  {
    id: 3,
    name: 'Elm Oyster',
    imageUrl: 'https://images2.imgbox.com/7a/db/6s2I1lKT_o.jpg',
  },
  {
    id: 4,
    name: 'Golden Oyster',
    imageUrl: 'https://images2.imgbox.com/67/3d/4aWerZpY_o.jpg',
  },
  {
    id: 5,
    name: 'Grey Oyster',
    imageUrl: 'https://images2.imgbox.com/98/4b/kMGGYMCQ_o.jpg',
  },
  {
    id: 6,
    name: 'King Oyster',
    imageUrl: 'https://images2.imgbox.com/d9/7a/eXrs5yth_o.jpg',
  },
  {
    id: 7,
    name: 'Pearl Oyster',
    imageUrl: 'https://images2.imgbox.com/e7/12/QvyvmRwS_o.jpg',
  },
  {
    id: 8,
    name: 'Phoenix Oyster',
    imageUrl: 'https://images2.imgbox.com/24/3f/Os3Dles8_o.jpg',
  },
  {
    id: 9,
    name: 'Pink Oyster',
    imageUrl: 'https://images2.imgbox.com/49/d3/ZVswBjAN_o.png',
  },
];
