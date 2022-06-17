/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function CompletePurchase({navigation}) {
  const getStarted = () => {
    navigation.push('CustomerSignUp');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingMain}>
        {/* Connect<Text style={{ color: "#F46F40" }}>.</Text> */}
      </Text>
      <Image
        resizeMode="contain"
        source={require('../assets/images/cart.png')}
        style={{width: 300, height: 300, flex: 1}}
      />
      <View
        style={{
          flex: 1,
          marginTop: 50,
          width: '100%',
          padding: 20,
          alignItems: 'center',
        }}>
        <Text style={styles.headingMain}>Thankyou </Text>
        <Text style={styles.headingMain}>For </Text>
        <Text style={[styles.headingMain, {color: '#F46F40'}]}>
          Purchasing{' '}
        </Text>

        <TouchableOpacity style={styles.btn2} onPress={getStarted}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              textAlign: 'center',
            }}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#000',
    borderRadius: 50,
    borderWidth: 3,
    fontSize: 16,
    padding: 15,
    width: '70%',

    fontWeight: 'bold',
  },
  btn2: {
    marginTop: 50,
    backgroundColor: '#000',
    textAlign: 'center',
    color: '#000',
    borderRadius: 50,
    borderWidth: 3,
    fontSize: 16,
    padding: 15,
    width: '70%',
    fontWeight: 'bold',
  },
  headingMain: {
    textAlign: 'center',
    color: '#000',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
