import { StyleSheet } from 'react-native';
import { pixelSizeHorizontal, pixelSizeVertical } from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: theme.background,
    borderTopWidth: 1,
    borderTopColor: theme.grey,
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(20),
  },
});
