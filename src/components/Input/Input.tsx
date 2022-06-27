import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './Input.styles';
import { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({
  label,
  containerStyle,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput {...props} style={styles.input} />
      </View>
    </View>
  );
};
