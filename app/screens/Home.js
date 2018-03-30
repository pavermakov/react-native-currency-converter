import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GPB';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.22';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('handlePressBaseCurrency');
  };

  handlePressQuoteCurrency = () => {
    console.log('handlePressQuoteCurrency');
  };

  handleTextChange = (text) => {
    console.log('change text', text);
  };

  render() {
    return (
      <Container>
        <StatusBar
          translucent={false}
          barStyle='light-content'
        />

        <Logo />

        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType='numeric'
          onPress={this.handlePressBaseCurrency}
          onChangeText={this.handleTextChange}
        />

        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
      </Container>
    );
  }
}

export default Home;
