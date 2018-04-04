import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  handleThemePress = (color) => () => {
    console.log('press theme', color);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar
          translucent={false}
          barStyle="default"
        />

        <ListItem
          text="Blue"
          checkmark={false}
          iconBackground={styles.$blue}
          selected={true}
          onPress={this.handleThemePress(styles.$blue)}
        />

        <Separator />

        <ListItem
          text="Orange"
          checkmark={false}
          iconBackground={styles.$orange}
          selected={true}
          onPress={this.handleThemePress(styles.$orange)}
        />

        <Separator />

        <ListItem
          text="Green"
          checkmark={false}
          iconBackground={styles.$green}
          selected={true}
          onPress={this.handleThemePress(styles.$green)}
        />

        <Separator />

        <ListItem
          text="Purple"
          checkmark={false}
          iconBackground={styles.$purple}
          selected={true}
          onPress={this.handleThemePress(styles.$purple)}
        />

        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;
