import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
// ícone da câmera
import Icon from 'react-native-vector-icons/Feather';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="camera" size={60} color="#000" />
      </View>

      <TextInput
        placeholder="Telefone, nome de usuário ou email"
        placeholderTextColor="#999"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#0095f6',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  forgotText: {
    color: '#0095f6',
    fontSize: 12,
  },
});

export default LoginScreen;
