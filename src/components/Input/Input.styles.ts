import { StyleSheet } from 'react-native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.grey,
    borderRadius: fontPixel(4),
    height: pixelSizeVertical(40),
  },
  label: {
    color: theme.black,
    fontSize: fontPixel(16),
    fontWeight: '700',
    marginBottom: pixelSizeVertical(4),
  },
  input: {
    width: '100%',
    height: pixelSizeVertical(40),
    fontSize: fontPixel(16),
    paddingHorizontal: pixelSizeHorizontal(8),
    paddingVertical: 0,
  },
});
