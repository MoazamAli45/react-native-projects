import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

//   DATA
import {currencyValue} from './constants';
//   SNACKBAR
import Snackbar from 'react-native-snackbar';
import CurrencyButton from './components/CurrencyButton';

export default function App() {
  //    STATES =======================>
  const [inputValue, setInputValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [resultValue, setResultValue] = useState('');

  //      PRESS HANDLER   =================>
  const buttonPressHandler = (item: Currency) => {
    if (!inputValue) {
      Snackbar.show({
        text: 'Input should not  be Empty!',
        // duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
      return;
    }
    //   Convert into float Value
    const inputAmount = parseFloat(inputValue);
    if (isNaN(inputAmount)) {
      Snackbar.show({
        text: 'Input is not a number',
        // duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
      return;
    }
    //    Now logic
    const convertedAmount = item.value * inputAmount;

    const result = `${item.symbol} ${convertedAmount.toFixed(2)} 💵`;

    setResultValue(result);
    setTargetCurrency(item.name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.rupeesContainer}>
          <Text style={styles.rupee}>Rs</Text>
          <TextInput
            maxLength={14}
            value={inputValue}
            clearButtonMode="always" // IOS
            onChangeText={setInputValue}
            style={styles.inputAmountField}
            keyboardType="numeric"
            placeholder="Enter the amount in Rupees"
          />
        </View>
        {resultValue && <Text style={styles.resultTxt}>{resultValue}</Text>}
      </View>
      {/*  BOTTOM  */}
      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          data={currencyValue}
          //   REMINDER ABOUT THIS ONE
          renderItem={({item}) => (
            <Pressable
              onPress={() => buttonPressHandler(item)}
              style={[
                styles.button,
                targetCurrency === item.name && styles.selected,
              ]}>
              <CurrencyButton {...item} />
            </Pressable>
          )}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
