import { StyleSheet } from 'react-native';
import { fontPixel, pixelSizeHorizontal } from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';

export const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flatlist: {
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  boldText: {
    fontSize: fontPixel(20),
    fontWeight: '700',
    color: theme.black,
  },
  errorText: {
    color: theme.warning,
  },
  text: {
    fontSize: fontPixel(12),
    color: theme.grey,
  },
  center: {
    alignItems: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
});
