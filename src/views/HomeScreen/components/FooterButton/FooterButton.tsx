import React from 'react';
import { View } from 'react-native';
import { Button } from 'src/components';
import { styles } from './FooterButton.styles';
import { FooterButtonProps } from './FooterButton.types';

export const FooterButton: React.FC<FooterButtonProps> = ({
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.footer, containerStyle]}>
      <Button {...props} />
    </View>
  );
};
