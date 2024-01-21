import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addTrack, setupPlayer} from './musicPlayerService';
import MusicPlayer from './src/screens/MusicPlayer';

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    try {
      //   setupPlayer is in musicPlayerService.js
      let isSetup = await setupPlayer();
      if (isSetup) {
        console.log('Player Successfull', isSetup);

        //    LOAD DTATA
        await addTrack();
      }
      setIsPlayerReady(isSetup);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    // console.log(' Player not ready');
    return (
      <SafeAreaView>
        {/*    LOADING INDICATOR */}
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <MusicPlayer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
