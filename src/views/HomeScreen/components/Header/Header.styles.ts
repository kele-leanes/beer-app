import { StyleSheet } from 'react-native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(20),
  },
  outlined: {
    borderWidth: 1,
    borderColor: theme.grey,
    borderRadius: fontPixel(4),
    padding: fontPixel(8),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unselected: {
    opacity: 0.5,
  },
  pressable: {
    paddingHorizontal: fontPixel(4),
  },
});
