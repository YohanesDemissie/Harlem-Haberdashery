import React from 'react';
import { View, Image } from 'react-native';

import assets from '../../assets';
import Menu from '../components/Menu';

const Home = ({navigation}) =>{
  return(
    <View>
      <Menu navigation={navigation} />
      <Image source={assets.harlemHaberdasheryLogo} />
    </View>
  );
}

export default Home