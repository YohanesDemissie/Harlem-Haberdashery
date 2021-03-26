import React from 'react';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';


// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
const VideoPage = () => {
  return(
    <View style={{flex: 1}}>

      <Video source={{uri: "https://www.w3schools.com/html/mov_bbb.mp4"}}
      style={{flex: 1}} />
    </View>
  )
}


// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    display: 'flex',
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoPage