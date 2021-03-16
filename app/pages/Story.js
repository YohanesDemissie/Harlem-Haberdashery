import React from 'react';
import { Text, View } from 'react-native';

import Menu from '../components/Menu'

const Story =({navigation})=> {
  return(
  <View>
    <Menu navigation={navigation} />
    <Text>Story</Text>
  </View>
  )
}

export default Story