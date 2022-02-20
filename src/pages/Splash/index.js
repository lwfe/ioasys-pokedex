import {View, Image} from 'react-native';
import React, {useEffect} from 'react';

const background = require('../../assets/splashscreen.png');

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Image style={{width: '100%', height: '100%'}} source={background} />
    </View>
  );
}
