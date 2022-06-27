import { StyleSheet } from 'react-native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: pixelSizeVertical(8),
    backgroundColor: theme.white,
    paddingVertical: pixelSizeVertical(12),
    paddingHorizontal: pixelSizeHorizontal(8),
    shadowColor: theme.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  sectionContainer: {
    marginTop: pixelSizeVertical(8),
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  sectionTitle: {
    color: theme.black,
    fontSize: fontPixel(12),
    fontWeight: '700',
    lineHeight: fontPixel(20),
  },
  sectionColumn: {
    marginRight: pixelSizeHorizontal(40),
  },
});
