import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

export default function App() {
  const [isCross, setIsCross] = useState(false);
  const [gameWinner, setGameWinner] = useState('');
  //    GAME STATE OF ARRAYS
  //                 Array is filled with 'empty' ==============>
  const [gameState, setgameState] = useState(new Array(9).fill('empty', 0, 9));

  const reloadGameHandler = () => {
    setGameWinner('');
    setIsCross(false);
    setgameState(new Array(9).fill('empty', 0, 9));
  };

  //     GAME WINNER        =====================>
  const checkGameWinner = () => {
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw Game ...😊');
    }
  };

  //   CHANGE BOX
  const changeBlock = (indexNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
      });
    }

    if (gameState[indexNumber] === 'empty') {
      gameState[indexNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: ' Position is already filled!',
        backgroundColor: 'red',
        textColor: '#FFF',
      });
    }

    checkGameWinner();
  };

  return (
    <SafeAreaView>
      <StatusBar />

      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{gameWinner}</Text>
        </View>
      ) : (
        <View
          style={[
            styles.playerInfo,
            isCross ? styles.playerX : styles.playerO,
          ]}>
          <Text style={[styles.gameTurnTxt]}>
            {' '}
            Player
            {isCross ? 'X' : 'O'}'s trun'{' '}
          </Text>
        </View>
      )}
      {/*  GAME GRID */}
      <FlatList
        numColumns={3}
        data={gameState}
        style={styles.grid}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            onPress={() => changeBlock(index)}
            style={styles.card}>
            <Icons name={item} />
          </Pressable>
        )}
      />
      {/*    GAME ACTION */}
      <Pressable onPress={reloadGameHandler} style={styles.gameBtn}>
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start Game ' : 'Reload Game'}{' '}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 50,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  grid: {
    marginVertical: 50,
  },
  card: {
    width: '33.33%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    paddingVertical: 8,
    marginHorizontal: 50,
    paddingHorizontal: 12,
    backgroundColor: '#8D3DAF',
    borderRadius: 10,
    alignItems: 'center',
  },
  gameBtnText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
