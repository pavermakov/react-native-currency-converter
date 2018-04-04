import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';
import styles from './styles';

const ListItem = (props) => {
  const {
    checkmark = true,
    customIcon = null,
    selected = false,
    visible = true,
    iconBackground,
    text,
    onPress,
  } = props;

  return (
    <TouchableHighlight
      underlayColor={styles.$underlayColor}
      onPress={onPress}
    >
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} /> : <Icon />}
        {customIcon}
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackground: PropTypes.string,
  customIcon: PropTypes.element,
  onPress: PropTypes.func,
};

export default ListItem;
