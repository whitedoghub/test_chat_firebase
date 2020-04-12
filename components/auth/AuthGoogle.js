import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

const AuthGoogle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AuthGoogle</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AuthGoogle;
