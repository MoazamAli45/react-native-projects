import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
} from 'react-native';
const AppPro = (): JSX.Element => {
  //    useColorScheme() === 'dark';  TELLS US ABOUT SYSTEM THEME
  //   const isDarkMode = useColorScheme() === 'dark';
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleHandler = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello World {isDarkMode ? 'Dark' : 'Light'}
        </Text>
        <Button
          onPress={toggleHandler}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1, // flex: 1 means "take up all the space"
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});

export default AppPro;
