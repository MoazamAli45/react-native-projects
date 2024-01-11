/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {ImageSourcePropType} from 'react-native';
import {StyleSheet} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

//  AS a typescript add module in index.d.ts
import DiceOne from '../assets/DiceOne.png';
import DiceTwo from '../assets/DiceTwo.png';
import DiceThree from '../assets/DiceThree.png';
import DiceFour from '../assets/DiceFour.png';
import DiceFive from '../assets/DiceFive.png';

type ImageProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const DiceImage = ({imageUrl}: ImageProps): JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

export const App = () => {
  const [diceImage, setDiceImage] =
    React.useState<ImageSourcePropType>(DiceOne);
  const diceImageHandler = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }

    //   FOR HAPTIC FEEDBACK
    // ReactNativeHapticFeedback.trigger('impactLight', options);
    ReactNativeHapticFeedback.trigger('notificationSuccess', options);
  };
  return (
    <View style={styles.container}>
      <DiceImage imageUrl={diceImage} />
      {/*   PRESSABLE HAS  Pressable is a more recent addition to React Native 
      and offers a more flexible API for handling various press interactions.
      */}
      <Pressable onPress={diceImageHandler}>
        <Text style={styles.diceButtonText}>Roll Dice</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  diceButtonText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
