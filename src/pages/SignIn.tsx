import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);

  function handleSignIn() {
    if (!email || !password) {
      Alert.alert('Entrar', 'Informe e-mail e senha');
    }

    setIsloading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((e) => {
        console.log(e);
        setIsloading(false);

        if (e.code === 'auth/invalid-email') {
          return Alert.alert('Entrar', 'Email inválido.');
        }

        if (e.code === 'auth/wrong-password') {
          return Alert.alert('Entrar', 'Email ou senha inválida.');
        }

        if (e.code === 'auth/not-found') {
          return Alert.alert('Entrar', 'Email inválido.');
        }

        return Alert.alert('Entrar', 'Não foi possível acessar.');

      });

  };

  const { colors } = useTheme();
  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Logo />

      <Heading color='gray.100' fontSize='xl' mt={24} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        mb={4}
        placeholder='E-mail'
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        onChangeText={setEmail}
      />
      <Input
        mb={8}
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button
        title='Entrar'
        w='full'
        onPress={handleSignIn}
        isLoading={isLoading}
      />

    </VStack>
  )
}