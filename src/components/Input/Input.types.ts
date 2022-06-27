import { TextInputProps, ViewStyle } from 'react-native';

export interface InputProps extends TextInputProps {
  label: string;
  containerStyle?: ViewStyle;
}
