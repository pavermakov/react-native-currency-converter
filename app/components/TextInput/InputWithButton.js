import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';
import styles from './styles';

const InputWithButtons = (props) => {
  const { onPress, buttonText, editable = true, textColor } = props;
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
  const containerStyles = [styles.container];
  const buttonTextStyles = [styles.buttonText];

  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }

  if (textColor) {
    buttonTextStyles.push({ color: textColor });
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        style={styles.buttonContainer}
        underlayColor={underlayColor}
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>

      <View style={styles.border} />

      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        {...props}
      />
    </View>
  );
};

InputWithButtons.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
};

export default InputWithButtons;
