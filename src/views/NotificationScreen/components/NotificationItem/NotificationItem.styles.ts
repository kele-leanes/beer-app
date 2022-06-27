import { StyleSheet } from 'react-native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(20),
    borderBottomColor: theme.background,
    borderBottomWidth: 1,
  },
  title: {
    color: theme.black,
    fontSize: fontPixel(16),
    marginRight: pixelSizeHorizontal(4),
    fontWeight: '700',
    flexShrink: 1,
  },
  body: {
    color: theme.grey,
    fontSize: fontPixel(12),
    lineHeight: fontPixel(20),
  },
});
