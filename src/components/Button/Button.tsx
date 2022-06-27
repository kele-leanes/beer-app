import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  textStyle,
  style,
  outlined,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        outlined && styles.outlined,
        props.disabled && styles.disabled,
      ]}
      {...props}>
      {icon}
      <Text style={[styles.text, textStyle, outlined && styles.outlinedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
