import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

//   YUP FOR FORM VALIDATION

import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function App() {
  const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(8, ' Should be minimum 8 characters')
      .max(16, 'Should be maximum 16 characters')
      .required('Length is required'),
  });

  //   Password State
  const [password, setPassword] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  //   Password Properties
  const [lowerCase, setIsLowerCase] = useState(true);
  const [upperCase, setIsUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  //   generatePassword String according to selection by user
  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
    const numbersList = '1234567890';
    const symbolsList = '!@#$%^&*()_+';

    if (lowerCase) {
      characterList += lowercaseList;
    }
    if (upperCase) {
      characterList += upperCaseList;
    }
    if (numbers) {
      characterList += numbersList;
    }

    if (symbols) {
      characterList += symbolsList;
    }
    const genertedPassword = createPassword(characterList, passwordLength);

    setPassword(genertedPassword);
    setIsGenerated(true);
  };

  //   Create Password Logic

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      //    random characters from chracters including in password
      const index = Math.round(Math.random() * characters.length);
      result += characters.charAt(index);
    }
    return result;
  };

  const resetPasswordState = () => {
    setIsLowerCase(true);
    setIsUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    //   EXPLAINATION ABOUT 'handled'  ============>
    // keyboardShouldPersistTaps="handled", it means that tapping outside the
    // TextInput will not automatically dismiss the keyboard. Instead, you can handle it
    // programmatically using the onPress or onPressOut events in your components.
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            //  validation using YUP
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              //   CONVERTING PASSWORD LENGTH TO NUMBER ==========>
              generatePasswordString(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              isValid,
              touched,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {/*    FOR SHOWING ERRORS  =============> */}
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    //    REMINDER WILL BE INSIDE INVERTED COMMAS
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lower Case</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    onPress={() => setIsLowerCase(!lowerCase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Upper Case</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setIsUpperCase(!upperCase)}
                    fillColor="#3498DB"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#E74292"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#F3B63A"
                  />
                </View>
                {/*   FORM ACTION */}
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.primaryBtnTxt}>
                      Generate a Password
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      resetPasswordState();
                      handleReset();
                    }}>
                    <Text style={styles.secondaryBtnTxt}>Reset </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isGenerated ? (
          <View style={[styles.cardElevated, styles.card]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  primaryBtn: {
    width: '50%',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: '50%',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});
