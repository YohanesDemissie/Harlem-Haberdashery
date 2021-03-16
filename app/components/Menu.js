import React from 'react';
import { View, Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default ({ navigation }) => {
  return(
    <View style={{ display: 'block', marginLeft: '1%', marginTop: '10%' }}>
      <Button
        title="Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  )
}