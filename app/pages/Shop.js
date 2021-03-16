import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../components/Menu';


const Shop = ({navigation}) =>{
  return(
    <View>
      <Menu navigation={navigation} />
      <Text>Shop</Text>
    </View>
  );
}

export default Shop