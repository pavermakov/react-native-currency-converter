import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Container } from '../components/Container';

const Home = () => (
  <Container>
    <StatusBar
      translucent={false}
      barStyle="light-content"
    />

    <View>
      <Text>Home view</Text>
    </View>
  </Container>
);

export default Home;
