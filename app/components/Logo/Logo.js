import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.containerImage}
      source={ require('./images/background.png') }
      resizeMode="contain"
    >
      <Image
        style={styles.image}
        source={ require('./images/logo.png') }
        resizeMode="contain"
      />
    </ImageBackground>

    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
