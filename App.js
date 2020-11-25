/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import colors from './colors';

import ReverseBorder from './ReverseBorder';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />

      <View style={styles.body}>
        <View style={styles.topParent}>
          <View style={styles.topContent}>
            <View style={styles.topBox} />
            <Text style={styles.topText}>Gokul Kulkarni</Text>
            <View style={styles.topBox} />
          </View>
          <ReverseBorder
            borderParentAlignment={'flex-start'}
            borderWidthAndRadius={50}
            borderColor={colors.bottomContainerColor}
            borderSide={'flex-start'}
            parentBgColor={colors.topContainerColor}
            borderLocation={{borderBottomLeftRadius: 50}}
          />
        </View>
        <View style={styles.bottomParent}>
          <ReverseBorder
            borderParentAlignment={'flex-end'}
            borderWidthAndRadius={50}
            borderColor={colors.topContainerColor}
            borderSide={'flex-end'}
            parentBgColor={colors.bottomContainerColor}
            borderLocation={{borderTopRightRadius: 50}}
          />
          <View style={styles.bottomContent}>
            <Text>Balance</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.parentContainerColor,
    justifyContent: 'center',
  },
  topParent: {
    backgroundColor: colors.topContainerColor,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  bottomParent: {
    backgroundColor: colors.bottomContainerColor,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  bottomContent: {
    paddingTop: 50,
    paddingBottom: 100,
    paddingRight: 100,
    paddingLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContent: {
    flexDirection: 'row',
    paddingTop: 100,
    paddingBottom: 50,
    paddingRight: 50,
    paddingLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {flex: 0.5, margin: 20, textAlign: 'center'},
  topBox: {
    backgroundColor: colors.black,
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});

export default App;
