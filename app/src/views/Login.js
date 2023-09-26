import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';
import { useSetRecoilState } from 'recoil';

import loginApi from '../services/login';
import { userState } from '../recoil/atoms/auth';
export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const setUser = useSetRecoilState(userState);

  const login = async () => {
    try {
      const data = await loginApi.login(username, password);
      setUser({
        loggedIn: true,
        access: data.access,
        refresh: data.refresh,
      });
      setUsername('');
      setPassword('');
      setErrorMsg(null);
      await SecureStore.setItemAsync('access', data.access);
      navigation.goBack();
    } catch (error) {
      setUser({ loggedIn: false, access: null, refresh: null });
      setErrorMsg('Usuário ou senha inválidos!');
      await SecureStore.deleteItemAsync('access');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Usuário"
        style={{ width: '90%', marginBottom: 10 }}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        label="Password"
        type="password"
        secureTextEntry={true}
        style={{ width: '90%', marginBottom: 10 }}
        value={password}
        onChangeText={setPassword}
      />
      <Button mode="contained" onPress={() => login()}>
        Entrar
      </Button>
      <Text>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
