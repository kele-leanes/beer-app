import { StyleSheet } from 'react-native';
import { fontPixel, pixelSizeVertical } from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';

export const styles = StyleSheet.create({
  outerOverlay: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: theme.black,
    opacity: 0.3,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: theme.white,
    borderRadius: fontPixel(16),
    paddingBottom: pixelSizeVertical(24),
  },
});
