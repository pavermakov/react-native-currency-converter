import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

const themeIcon = (
  <Ionicons
    name={`${ICON_PREFIX}-arrow-forward`}
    color={ICON_COLOR}
    size={ICON_SIZE}
  />
);

const linkIcon = (
  <Ionicons
    name={`${ICON_PREFIX}-link`}
    color={ICON_COLOR}
    size={ICON_SIZE}
  />
);

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handleThemesPress = () => {
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
    Linking
      .openURL('http://fixer.io')
      .catch(() => {
        this.props.alertWithType('error', 'Sorry!', 'The requested link cannot be opened.')
      });
  };

  render() {
    return (
      <ScrollView>
        <StatusBar
          barStyle="default"
          translucent={false}
        />

        <ListItem
          text="Themes"
          customIcon={themeIcon}
          onPress={this.handleThemesPress}
        />

        <Separator />

        <ListItem
          text="Fixer.io"
          customIcon={linkIcon}
          onPress={this.handleSitePress}
        />

        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
