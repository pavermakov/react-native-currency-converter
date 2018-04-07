import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string,
  };

  handlePress = (currency) => () => {
    const { type } = this.props.navigation.state.params;

    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };

  renderListItem = ({ item }) => {
    // @TODO this is incorrect, it is exectuted on each ListItem render
    const { type } = this.props.navigation.state.params;
    const currentCurrency = type === 'base' ? this.props.baseCurrency : this.props.quoteCurrency;

    return (
      <ListItem
        iconBackground={this.props.primaryColor}
        text={item}
        selected={item === currentCurrency}
        onPress={this.handlePress(item)}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="default"
          translucent={false}
        />

        <FlatList
          data={currencies}
          keyExtractor={(item) => item}
          renderItem={this.renderListItem}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const { primaryColor } = state.theme;

  return {
    baseCurrency,
    quoteCurrency,
    primaryColor,
  };
};

export default connect(mapStateToProps)(CurrencyList);
