import { ViewStyle } from 'react-native';
import { ButtonProps } from 'src/components/Button/Button.types';

export interface FooterButtonProps extends ButtonProps {
  containerStyle?: ViewStyle;
}
