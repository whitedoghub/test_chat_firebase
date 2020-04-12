import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [push, setPush] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const goChat = () => {
    navigation.navigate('Chat', { name: name });
  };

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('===> userInfo : ', userInfo);
      setPush(userInfo);
      setLoggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('1 ::: ');
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        console.log('2 ::: ');
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('3 ::: ');
        console.log(error);
      } else {
        // some other error happened
        console.log('4 ::: ');
        console.log(error);
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '923266546522-tfubdt6akt8fia5k9g84k90k5ra70m1u.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceCodeForRefreshToken: true,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle} />
      <View style={{ marginTop: 64 }}>
        <Image
          source={require('../assets/chat.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
      </View>
      <View style={{ marginHorizontal: 32 }}>
        <Text style={styles.header}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="hello world"
          onChangeText={(name) => setName(name)}
          value={name}
        />

        <View>
          <GoogleSigninButton onPress={_signIn} />
          {loggedIn ? <Text>log in</Text> : <Text>log out</Text>}
        </View>

        <View style={{ alignItems: 'flex-end', marginTop: 64 }}>
          <TouchableOpacity style={styles.continue} onPress={goChat}>
            <Text>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: '800',
    fontSize: 30,
    color: '#514E5A',
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BAB7C3',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5A',
    fontWeight: '600',
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#9075E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
