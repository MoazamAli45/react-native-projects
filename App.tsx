import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  //   STATES  ==============>
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  const generateBackgroundHandler = () => {
    const hexList = '0123456789ABCDEF';
    let bg = '#';

    //   Hex Code consists of 6 characters so loop till 6
    for (let i = 0; i < 6; i++) {
      const index = Math.round(Math.random() * 16); // hexlist is of 16 from that index get value
      bg += hexList[index];
    }
    setRandomBackground(bg);
  };

  return (
    <>
      {/*   STATUS BAR WHERE BATTERY AND OTHER NOTIFICATION SHOW */}
      <StatusBar backgroundColor={'#234f01'} />
      <View
        style={[
          styles.container,
          {
            backgroundColor: randomBackground,
          },
        ]}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={generateBackgroundHandler}>
          <Text style={styles.actionBtnTxt}>Press me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    backgroundColor: '#EC4849',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: 'white',
  },
});

export default App;
