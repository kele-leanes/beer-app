import { ReactElement } from 'react';
import { TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ReactElement<IconProps>;
  outlined?: boolean;
}
