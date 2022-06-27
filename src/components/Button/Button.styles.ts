import { StyleSheet } from 'react-native';
import { fontPixel, pixelSizeVertical } from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    height: pixelSizeVertical(48),
    width: '100%',
    borderRadius: fontPixel(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.white,
    fontSize: fontPixel(16),
    fontWeight: '700',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.grey,
  },
  outlinedText: {
    color: theme.primary,
  },
  disabled: {
    opacity: 0.5,
  },
});
