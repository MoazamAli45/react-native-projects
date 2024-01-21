import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useProgress} from 'react-native-track-player';

const SongSlider = () => {
  const {position, duration} = useProgress();
  return (
    <View>
      <Slider
        style={styles.sliderContainer}
        value={position}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#fff"
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {/*  2024-01-21T12:34:56.789Z  to ISOSTRING CONVERTS IN THIS FORM
           *1000 to convert into miliseconds
           */}
          {new Date(position * 1000).toISOString().substring(15, 19)}
        </Text>
        <Text style={styles.time}>
          {' '}
          {new Date((duration - position) * 1000)
            .toISOString()
            .substring(15, 19)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: 350,
    height: 40,
    marginTop: 25,

    flexDirection: 'row',
  },
  timeContainer: {
    width: 340,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: '#fff',
  },
});
export default SongSlider;
