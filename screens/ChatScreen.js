import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ChatScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ChatScreen;
