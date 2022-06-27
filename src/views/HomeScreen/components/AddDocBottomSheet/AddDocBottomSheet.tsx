import React from 'react';
import { BottomSheet, Button, Input } from 'src/components';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Text, View } from 'react-native';
import { styles } from './AddDocBottomSheet.styles';
import { fontPixel, pixelSizeVertical } from 'src/utils/dimensions';
import { theme } from 'src/utils/theme';
import { AddDocBottomSheetProps } from './AddDocBottomSheet.types';
import { FooterButton } from '../FooterButton/FooterButton';
import { useAddDocument } from './AddDocBottomSheet.hooks';

const CLOSE_ICON_SIZE = fontPixel(24);
const FILE_ICON_SIZE = fontPixel(20);
const BOTTOMSHEET_HEIGHT = pixelSizeVertical(440);

export const AddDocBottomSheet: React.FC<AddDocBottomSheetProps> = ({
  visible,
  onClose,
}) => {
  const { values, isValid, onTextChange, onAddDocument } = useAddDocument();

  return (
    <BottomSheet show={visible} onClose={onClose} height={BOTTOMSHEET_HEIGHT}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Add document</Text>
          <Icon
            name="close"
            size={CLOSE_ICON_SIZE}
            color={theme.grey}
            onPress={onClose}
          />
        </View>
        <Text style={styles.subtitle}>Document information</Text>
        <Input
          label="Name"
          containerStyle={styles.input}
          placeholder="File title"
          value={values.name}
          onChangeText={(text: string) => onTextChange('name', text)}
        />
        <Input
          label="Version"
          containerStyle={styles.input}
          placeholder="e.g: 1.0.1"
          value={values.version}
          onChangeText={(text: string) => onTextChange('version', text)}
        />
        <Text style={styles.label}>File</Text>
        <Button
          title="Choose file"
          outlined
          style={styles.attachButton}
          icon={
            <Icon
              name="paperclip"
              color={theme.primary}
              size={FILE_ICON_SIZE}
            />
          }
        />
      </View>
      <FooterButton
        title="Submit"
        onPress={onAddDocument}
        disabled={!isValid}
        containerStyle={styles.footer}
      />
    </BottomSheet>
  );
};
