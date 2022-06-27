import { StyleSheet } from 'react-native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: pixelSizeVertical(20),
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: pixelSizeVertical(8),
  },
  title: {
    color: theme.black,
    fontSize: fontPixel(24),
    fontWeight: '700',
  },
  subtitle: {
    color: theme.black,
    fontSize: fontPixel(16),
    fontWeight: '700',
  },
  input: {
    marginVertical: pixelSizeVertical(8),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  attachButton: {
    width: '40%',
  },
  label: {
    color: theme.black,
    fontSize: fontPixel(16),
    fontWeight: '700',
    marginBottom: pixelSizeVertical(4),
    marginTop: pixelSizeVertical(8),
  },
});
