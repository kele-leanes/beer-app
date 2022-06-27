import { StyleSheet } from 'react-native';
import { fontPixel } from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.grey,
    padding: fontPixel(8),
    borderRadius: fontPixel(4),
  },
  badge: {
    backgroundColor: theme.primary,
    minHeight: fontPixel(14),
    minWidth: fontPixel(14),
    position: 'absolute',
    borderRadius: fontPixel(6),
    right: fontPixel(2),
    top: fontPixel(4),
    alignItems: 'center',
    justifyContent: 'center',
    padding: fontPixel(2),
  },
  badgeNumber: {
    fontSize: fontPixel(8),
    color: theme.white,
  },
});
