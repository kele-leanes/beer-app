import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  useWindowDimensions,
  View,
} from 'react-native';
import { useKeyboard } from 'src/hooks/useKeyboard';
import { styles } from './BottomSheet.styles';
import { BottomSheetProps } from './BottomSheet.types';

const DEFAULT_HEIGHT = 300;

const useAnimatedBottom = (show: boolean, height: number = DEFAULT_HEIGHT) => {
  const animatedValue = useRef(new Animated.Value(0));

  const bottom = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, 0],
  });

  useEffect(() => {
    if (show) {
      return Animated.timing(animatedValue.current, {
        toValue: 1,
        duration: 350,
        easing: Easing.bezier(0.28, 0, 0.63, 1),
        useNativeDriver: false,
      }).start();
    }
    return Animated.timing(animatedValue.current, {
      toValue: 0,
      duration: 250,
      easing: Easing.cubic,
      useNativeDriver: false,
    }).start();
  }, [show, height]);

  return bottom;
};

export const BottomSheet: React.FC<BottomSheetProps> = ({
  children,
  show,
  height = DEFAULT_HEIGHT,
  onClose,
}) => {
  const { height: screenHeight } = useWindowDimensions();
  const keyboardHeight = useKeyboard();

  const marginBottomValue = Platform.OS === 'ios' ? keyboardHeight : 0;

  const bottom = useAnimatedBottom(show, height);

  return (
    <>
      {show && (
        <Pressable
          onPress={onClose}
          style={[styles.outerOverlay, { height: screenHeight }]}>
          <View />
        </Pressable>
      )}
      <Animated.View
        style={[
          styles.bottomSheet,
          {
            height,
            bottom,
            marginBottom: marginBottomValue,
          },
        ]}>
        {children}
      </Animated.View>
    </>
  );
};
