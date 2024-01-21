import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import {playListData} from './src/constants';

//   FOR SETTING UP PLAYER
export async function setupPlayer() {
  let isSetup = false;

  //     TODO IT IS IN YOUTUBE VIDEO
  // try {
  //   TrackPlayer.getCurrentTrack();
  //   isSetup = true;
  // } catch (err) {
  //   //   FOR SETTING UP PLAYER
  //   console.log('Not setup');
  //   await TrackPlayer.setupPlayer();
  //   isSetup = true;
  // }

  TrackPlayer.setupPlayer();
  isSetup = true;
  //    Returning isSetup to check if player is setup or not
  return isSetup;
}

//   FOR LOADING DATA
export async function addTrack() {
  try {
    await TrackPlayer.add(playListData);
  } catch (err) {
    console.log(err);
  }
  //   WHEN ONE PLAYLIST END THEN AGAIN START
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

//    REGISTERING THE PLAYBACK SERVICE
export async function playbackService() {
  //   FOR PLAY AND PAUSE
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  //     FOR PREVIOUS --------------->
  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  );
  //     FOR NEXT --------------->
  TrackPlayer.addEventListener(Event.RemoteNext, () =>
    TrackPlayer.skipToNext(),
  );
}
